import {
    Interaction,
    Message,
    MessageActionRow,
    MessageButton,
    MessageEmbed
} from 'discord.js'

import { ICommand } from 'wokcommands'
import { SlashCommandBuilder } from "@discordjs/builders";

import { CharactersSearchQuery } from 'generated/graphql';
import slugify from 'slugify';
import { GraphQLClient } from 'graphql-request';
import { QUERY_CHARACTER_SEARCH } from '../graphql/queries/characters';


const graphQLClient = new GraphQLClient(process.env.API_GRAPHQL!)


const getHero = async (hero: string) =>{
    const heroData = await graphQLClient.request<CharactersSearchQuery>(QUERY_CHARACTER_SEARCH, {search: slugify(hero)})

    if(heroData.characters.length <= 0){
        return 'not found'
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
    return getCharacter(heroData.characters)
}


const getRow = (id: number, length: number) => {
    const row = new MessageActionRow()
    
    
    row.addComponents(
        new MessageButton().setLabel("Previous").setCustomId('prev_embed').setStyle('SUCCESS').setDisabled(id === 0)
        )
    row.addComponents(
        new MessageButton().setLabel("Next").setCustomId('next_embed').setStyle('SUCCESS').setDisabled(id === length - 1)
    )

    return row
}

const nameCommand = new SlashCommandBuilder()
	.setName('hero')
	.setDescription('Search Hero for name')
	.addStringOption(option =>
        option.setName('name')
        .setDescription('The name of Hero')
			.setRequired(true)
			).toJSON()



export default {
    category: 'Hero',
    description: 'Search basic skills from hero by name',
    slash: 'both',
    options: nameCommand.options,
    callback: async({user, message, interaction, channel, client}) => {
        const name = interaction.options.getString('name')


    const character = await getHero(name!)

    if(character === 'not found') {
        return await interaction.reply(`character ${name} not found.`)
    }

        
    const skills = character.characterSkills
    const defaultEmbed: ()=>MessageEmbed = () => {
        return new MessageEmbed()
        .setColor('#0099ff')
        .setTitle(character.name)
        .setAuthor({ name: 'Epic 7 Bot'})
        .setThumbnail(`${character.image?.url}`)
        .addFields(
            
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
        .setFooter({ text: `Page 1/4`, iconURL: `${client.user?.displayAvatarURL()}`  })
    
    }


    const createEmbed: (skill:typeof skills[0], page: number )=>MessageEmbed  = (skill) => {
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
        .setFooter({ text: `Page ${page}/4`, iconURL: `${client.user?.displayAvatarURL()}`  })
    }

        const embeds = [
                defaultEmbed(),
                ...skills.map((skill, key)=> createEmbed(skill, key + 2))
            ]

        const id = user.id
        let page = 0
        const embed = embeds[page]
        let reply: Message | undefined
        let collector
        const filter = ( i: Interaction) => i.user.id === user.id
        const time = 30000



        if(message){
            reply = await message.reply({
                embeds: [embed],
                components: [getRow(page, embeds.length)]
            })
            collector = reply.createMessageComponentCollector({filter, time})
        } else {
            interaction.reply({
                embeds: [embed],
                components: [getRow(page, embeds.length)]
            })
            collector = channel.createMessageComponentCollector({filter, time})
        }

        
        collector.on('collect', (buttonInteraction)=>{
            if(!buttonInteraction){
                return
            }

            if(buttonInteraction.user.id !== interaction.user.id){
                return
            }
            buttonInteraction.deferUpdate()

            if(
                buttonInteraction.customId !== 'prev_embed' &&  buttonInteraction.customId !== 'next_embed'
            ){
                return
            }

            if(buttonInteraction.customId === 'prev_embed' && page > 0){
                --page
            }
            if(buttonInteraction.customId === 'next_embed' && page < embeds.length -1){
                ++page
            }
      
            if(reply){
                reply.edit({
                    embeds: [embeds[page]],
                    components: [getRow(page, embeds.length)]
                })
            }
            

            if(interaction) {               
                interaction.editReply({
                    embeds: [embeds[page]],
                    components: [getRow(page, embeds.length)]
                })
            
            }
        })
        collector.on('end', ()=>{
            interaction.editReply({embeds: [embeds[page]],  components: []})
        })
    }
} as ICommand