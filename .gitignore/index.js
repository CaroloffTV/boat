const Discord = require("discord.js");
var bot = new Discord.Client();
bot.on("ready" , function()  {
    console.log("Bot Ready !"); 
 });
 
 bot.login(process.env.TOKEN);

bot.on("message" , message => {
   if (message.content === "ping"){
       message.reply("pong");
       console.log("ping pong");
    }
    }
);

bot.on("message" , message => {
    if (message.content === "Bonjour"){
        message.reply("Bonjour");
        console.log("Bonjour Bonjour");
    }});

    bot.on("message" , message => {
        if (message.content === "bonjour"){
            message.reply("Bonjour");
            console.log("bonjour Bonjour");
        }});

        bot.on("message" , message => {
            if (message.content === "Bonsoir"){
                message.reply("Bonsoir");
                console.log("Bonsoir Bonsoir");
            }});

            bot.on("message" , message => {
                if (message.content === "bonsoir"){
                    message.reply("Bonsoir");
                    console.log("bonsoir Bonsoir");
                }});
             bot.on("message" , message => {
                if (message.content === "Bonne nuit"){
                    message.reply("Bonne nuit");
                    console.log("Bonne nuit Bonne nuit");
               

               }});
