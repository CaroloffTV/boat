const Discord = require("discord.js");
var bot = new Discord.Client();
bot.on("ready" , function()  {
    bot.user.setGame("ShowBot, !help");
    console.log("Bot Ready !"); 
 });
 
 bot.login("NDMyOTY4NTE0OTY2NTE5ODI4.Da1NYA.zPWNG5X546Ez_XEHyXbPFVgwSeM");
