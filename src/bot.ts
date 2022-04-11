import dotenv from "dotenv"
import {Client, Intents, MessageActionRow, MessageButton, MessageEmbed } from "discord.js";
import { SlashCommandBuilder } from "@discordjs/builders";

import { GraphQLClient } from 'graphql-request'
import { QUERY_CHARACTER_SEARCH } from "./graphql/queries/characters";
import { CharactersSearchQuery } from './generated/graphql';
import slugify from 'slugify';


dotenv.config()

let client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
const graphQLClient = new GraphQLClient(process.env.API_GRAPHQL!)


client.on("ready", async ()=>{
    console.log(`O Bot foi iniciado - use com sabedoria`)

    const guildId = '961970072975450163/961970072975450166'
    const guild = client.guilds.cache.get(guildId)
    let commands

    if(guild){    
        commands = guild.commands
    } else {
        commands= client.application?.commands
    }


    const data = new SlashCommandBuilder()
	.setName('hero')
	.setDescription('Search Hero for name')
	.addStringOption(option =>
        option.setName('name')
			.setDescription('The name of Hero')
			.setRequired(true)
			);

    commands?.create(data.toJSON())

    
})



client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;
    
    
    const {commandName, options} = interaction

    if (commandName === 'hero') {   
    const hero = options.getString('name')
    if(!hero){
        return
    }

    let pageNo = 0;
    const heroData = await graphQLClient.request<CharactersSearchQuery>(QUERY_CHARACTER_SEARCH, {search: slugify(hero)})

    if(heroData.characters.length <= 0){
        return await interaction.reply(`character ${hero} not found.`)
    }

    const getCharacter = (data: typeof heroData.characters) => {

        if(data.length > 1){
            const filter = data.filter((character)=> character.slug === slugify(hero))
            if(filter.length > 0){
                return filter[0]
            }
        }
        
        return data[0]
        
    }
    const character = getCharacter(heroData.characters)

    const skills = character.characterSkills
    const defaultEmbed: ()=>MessageEmbed = () => {
        return new MessageEmbed()
        .setColor('#0099ff')
        .setTitle(character.name)
        .setAuthor({ name: 'Epic 7 Bot'})
        .setThumbnail(`${character.image?.url}`)
        .addFields(
            // { name: char.name, value: char.slug },
            // { name: '\u200B', value: '\u200B' },
            
            { name: 'Imprint Release - SSS', value: `${character.memoryImprint?.imprintRelease}`, inline: false },
            { name: 'Imprint Concentration - SSS', value: `${character.memoryImprint?.imprintConcentration}`, inline: false },
            
            { name: 'Awakened Status', value: 'LVL 60 / Stars - 6', inline: false },
            
            { name: '\u200B', value: '-' },
            { name: 'Atk', value: character.characterStatus.atk, inline: true },           
            { name: 'HP', value: character.characterStatus.hp, inline: true },
            { name: 'Def', value: character.characterStatus.def, inline: false },
            { name: '-', value: '\u200B' },
            { name: 'Critical Hit Chance', value: character.characterStatus.criticalHitChance, inline: true },
            { name: '\u200B', value: '\u200B', inline: true },
            { name: 'Critical Hit Damage', value: character.characterStatus.criticalHitChance, inline: true },
            { name: 'Dual Attack Chance', value: character.characterStatus.dualAtackChance, inline: true },
            { name: '\u200B', value: '\u200B', inline: true },
            { name: 'Effectiveness', value: character.characterStatus.effectiveness, inline: true },
            { name: 'Effect Resistance', value: character.characterStatus.effectResistance, inline: true },
            { name: 'Speed', value: character.characterStatus.speed, inline: true },

            { name: '\u200B', value: '\u200B' },
            { name: 'Position', value: ' - ', inline: false }

        )
        .setTimestamp()
        .setImage(`${character.memoryImprint ? character.memoryImprint.position?.url : ''}`)
        .setFooter({ text: `Page 1/4` })
    // .setFooter(`Page ${pageNo}/${helpArray.length}`);
    }


    const createEmbed: (skill:typeof skills[0] )=>MessageEmbed  = (skill) => {
        return new MessageEmbed()
        .setColor('#0099ff')
        .setTitle(character.name)
        .setURL('https://discord.js.org/')
        .setAuthor({ name: 'Epic 7 Bot', url: 'https://discord.js.org' })
        .setThumbnail(`${skill.icon?.url}`)
        .addFields(
            { name: character.name, value: '-' },
            { name: '\u200B', value: '\u200B' },
            { name: skill.title, value: skill.description, inline: true },
            { name: '\u200B', value: '\u200B' },
            { name: 'Enhancements:', value: '\u200B' },
            ...skill.enhancement.map((enhance)=> ({name: enhance, value: '\u200B', inline: false }))

        )
        .setTimestamp()
    }

    const info = [
        defaultEmbed(),
        ...skills.map((skill)=> createEmbed(skill))
    ]
    const getButtons = (pageNo:number) => {
        return new MessageActionRow().addComponents(
          new MessageButton()
            .setLabel("Previous")
            .setCustomId("prev")
            .setStyle("SUCCESS")
            .setDisabled(pageNo <= 0),
          new MessageButton()
            .setLabel("Next")
            .setCustomId("next")
            .setStyle("SUCCESS")
            .setDisabled((pageNo >= info.length -1)),
        );
      };
      const collector = interaction.channel?.createMessageComponentCollector({ time: 600000, componentType: "BUTTON" });
      
      await interaction.reply({
        embeds: [defaultEmbed()],
        components: [getButtons(pageNo)], fetchReply: true 
      });


      collector?.on("collect", async (buttonInteraction) => {
          if(buttonInteraction.user.id !== interaction.user.id){
              return
          }
        if (buttonInteraction.customId === "next") {
            
            pageNo++;
            if(pageNo >= info.length){
                pageNo = 0
            }
            // console.log(`page - ${pageNo} | length - ${info.length}`)
            if (pageNo === 0){
                await buttonInteraction.update({ embeds: [defaultEmbed()], components: [getButtons(pageNo)] });
                // await buttonInteraction.deferUpdate()
                
            }else {

                await buttonInteraction.update({ embeds:  [info[pageNo].setFooter({ text: `Page ${pageNo+1}/4` })], components: [getButtons(pageNo)] })
                // await interaction.editReply({ embeds: [info[pageNo].setFooter({ text: `Page ${pageNo+1}/4` })], components: [getButtons(pageNo)] });
                // await buttonInteraction.deferUpdate()
            }
            
        } else if (buttonInteraction.customId === "prev") {
            
            pageNo--;
            if (pageNo === 0){
                await buttonInteraction.update({ embeds: [defaultEmbed()], components: [getButtons(pageNo)] });
                // await buttonInteraction.deferUpdate()
                
            }else{

                await buttonInteraction.update({ embeds: [info[pageNo].setFooter({ text: `Page ${pageNo+1}/4` })], components: [getButtons(pageNo)] });
                // await buttonInteraction.deferUpdate()
            }
          
        }
    })

}})


// client.on('message', (message) => {
//     if(message.author.bot) return

//     if(message.content === 'y!presentation'){
//         const voiceChannel = message.member?.voice.channel
//
//     }
// })

client.login(process.env.TOKEN);


import express from 'express'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    return res.sendStatus(200)   
})

app.listen(3333, ()=>{console.log('server iniciado')})

