import 'dotenv/config'
import {Client, Intents,} from "discord.js";
import WOK from 'wokcommands'
import path from 'path'


let client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

client.on("ready", async () => {
    new WOK(client, {
    commandsDir: path.join(__dirname, 'commands'),
    typeScript: true
})
})

client.on('shardError', error => {
	console.error('A websocket connection encountered an error:', error);
});

client.login(process.env.TOKEN);




//start express for heroku dont shutdown
import express from 'express'

const app = express()
app.use(express.json())

app.get('/', (_, res) => {
    return res.sendStatus(200)   
})

app.listen(process.env.PORT || 5000, ()=>{console.log('server iniciado')})

