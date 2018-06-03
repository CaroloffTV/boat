const Discord = require("discord.js");
const low = require("lowdb")
const FileSync = require("lowdb/adapters/FileSync")

const adapter = new FileSync("database.json");
const db = low(adapter);

db.defaults({ histoires: []})
.write()



var bot = new Discord.Client();
var prefix = ("/")
var randnum = 0





bot.on("ready" , () => {

   console.log("Bot Ready !"); 
});

bot.login("NDMyOTY4NTE0OTY2NTE5ODI4.Da1NYA.zPWNG5X546Ez_XEHyXbPFVgwSeM");
