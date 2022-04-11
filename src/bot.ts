import 'dotenv/config'
import {Client, Intents,} from "discord.js";
import WOK from 'wokcommands'
import path from 'path'




// import cluster from 'cluster'
// if (cluster.isMaster) {

//      cluster.fork();
   
//    cluster.on('exit', function(worker){
//       console.log('Worker ' + worker.id + ' died..');
//       cluster.fork();
//    });
// }
// else{

    let client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

    client.on("ready", async () => {
        new WOK(client, {
            commandsDir: path.join(__dirname, 'commands'),
            // typeScript: true
        })
    })


    client.login(process.env.TOKEN);


// }

