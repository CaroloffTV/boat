const Discord = require("discord.js");
var bot = new Discord.Client();
bot.on("ready" , function()  {
    bot.user.setGame("ShowBot, !help");
    console.log("Bot Ready !"); 
 });
 
 bot.login("NDMyOTY4NTE0OTY2NTE5ODI4.Da1NYA.zPWNG5X546Ez_XEHyXbPFVgwSeM");

bot.on("message" , message => {
   if (message.content === "ping"){
       message.reply("pong");
       console.log("ping pong");
    }




 

    if (message.content === prefix + "help"){
        message.channel.sendMessage("Voici les commandes du bot :\n -/help pour afficher les commandes");
        message.channel.sendMessage("-/kick pour kick un joueur");
        message.channel.sendMessage("-/ban pour ban un joueur");
        console.log("Commande Help demandée !");  

    }
});

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
