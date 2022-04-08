import dotenv from "dotenv"
import {Client, Message, Intents } from "discord.js";

dotenv.config()


let client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on("ready", ()=>{
    console.log(`O Bot foi iniciado - use com sabedoria`)
    client.user?.setStatus(`online`)
    
})


client.on("message", async (message: Message) => {
    console.log(message)
    if (message.author.bot) return
    if(message.channel.type === 'DM') return
    

    const args = message.content.slice(1).trim().split(/ +/g)
    const command = args.shift()?.toLowerCase()

    if(command === 'ch'){
        const m = await message.channel.send("Message")
    }
});

client.on('interactionCreate', async interaction => {
    console.log(interaction)
    if (!interaction.isCommand()) return;
    
    if (interaction.commandName === 'ping') {
      await interaction.reply('Pong!');
    }
  });

client.login(process.env.TOKEN);

