import 'dotenv/config'
import express, { Request, Response } from 'express';
import {Client, Intents} from "discord.js";
import WOK from 'wokcommands'
import path from 'path'


const PORT = process.env.PORT || 5000;
const app = express();


app.use(express.urlencoded({ extended: true }));

app.use('/', (_: Request, response: Response) => {
  response.sendStatus(200);
});



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


    app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
}

