import 'dotenv/config'
import {Client, Intents,} from "discord.js";
import WOK from 'wokcommands'
import path from 'path'
import express from 'express'




import cluster from 'cluster'
if (cluster.isMaster) {

     cluster.fork();
   
   cluster.on('exit', function(worker){
      console.log('Worker ' + worker.id + ' died..');
      cluster.fork();
   });
}
else{

    let client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

    client.on("ready", async () => {
        new WOK(client, {
            commandsDir: path.join(__dirname, 'commands'),
            // typeScript: true
        })
    })


    client.login(process.env.TOKEN);




    const app = express()
    app.use(express.json())

    app.get('/', (_, res) => {
        return res.sendStatus(200)   
    })

    app.listen(process.env.PORT || 5000, ()=>{console.log('server iniciado')})
}

