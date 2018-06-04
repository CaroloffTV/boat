'use strict';
const config = require('./config.json');

const cmds = require('./commands.js');

const music = require('./music.js');

const tool = require('./tool.js');



const prompt = require('prompt');

const colors = require('colors');

prompt.message = '';

prompt.delimiter = '';
const Discord = require("discord.js");
var bot = new Discord.Client();
var prefix = ("/")
var randnum = 0
bot.on("ready" , function()  {
    console.log("Bot Ready !"); 
 });
 
 bot.login(process.env.TOKEN);

 
 ///////////////////////////////////////////////////////////////////////// MESSAGES /////////////////////////////////////////////////////////////////////////////////////////////////
 
 
 bot.on("message" , message => {
    if (message.content === "ping"){
        message.reply("pong");
        console.log("ping pong");
     }
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.substring(prefix.length).split(" ");
 
  switch (args[0].toLowerCase()){
 
 case "newstory":
 var value = message.content.substr(10); 
 var author = message.author.toString();
 var number = db.get('histoires').map('id').value();
 //var storyid = number + 1;
 console.log(value);
 message.reply("Ajout de l'histoire dans la base de donnée")
 db.get("histoires")
  .push({  story_value: value, story_author: author})
  .write();
 
 
 break;
   
 case "kick":
 
 if (!message.channel.permissionsFor(message.member).hasPermissions("KICK_MEMBERS")){
 
 message.reply("Tu n'as pas le droit de kick ! ")
 }else{
 var memberkick = message.mentions.members.first();
 console.log(memberkick)
 console.log(message.guild.member(memberkick).kickable)
 if(!message.guild.member){
 message.reply("L'utilisateur n'existe pas ! ");
 }else{
 if(!message.guild.member(memberkick).kickable){
     message.reply("Utilisateur impossible à kick ! ");
 }else{
 message.guild.member(memberkick).kick().then((member) => {
     message.channel.send('${member.displayName} a été kick ! ');
 }).catch(() => {
     message.channel.send("kick Refusé !")
 
 })
 }
 }
 }
 
 
 break;
 case "ban":
 
 if (!message.channel.permissionsFor(message.member).hasPermissions("BAN_MEMBERS")){
 
 message.reply("Tu n'as pas le droit de ban ! ")
 }else{
 var memberban = message.mentions.members.first();
 console.log(memberban)
 console.log(message.guild.member(memberban).bannable)
 if(!memberban){
 message.reply("L'utilisateur n'existe pas ! ");
 }else{
 if(!message.guild.member(memberban).bannable){
     message.reply("Utilisateur impossible à ban ! ");
 }else{
 message.guild.member(memberban).ban().then((member) => {
     message.channel.send('${member.displayName} a été ban ! ');
 }).catch(() => {
     message.channel.send("ban Refusé !")
 
 })
 }
 }
 }
 
 
 break;
 
 
 
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
               



