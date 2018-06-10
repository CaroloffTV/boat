

const Discord = require("discord.js");
var bot = new Discord.Client();
var prefix = ("!")
var randnum = 0





bot.on("ready" , () => {

   console.log("Bot Ready !"); 
});

bot.login(process.env.TOKEN);
 
bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "général").send(` ${member.user.username} vient de rejoindre le serveur ! Bienvenue et bon jeu. Pour plus d\'infos : !help`)

})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "général").send(`${member.user.username} vient de quitter le serveur ! A bientôt et bon jeu.`) 

}) 

///////////////////////////////////////////////////////////////////////// MESSAGES /////////////////////////////////////////////////////////////////////////////////////////////////
 
 
 bot.on("message" , message => {
    if (message.content === "ping"){
        message.reply("pong");
        console.log("ping pong");
     }
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.substring(prefix.length).split(" ");
 
  switch (args[0].toLowerCase()){
 

   
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
     message.channel.send(`${member.user.username} a été kick ! `);
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
     message.channel.send(`${member.user.username} a été ban ! `);
 }).catch(() => {
     message.channel.send("ban Refusé !")
 
 })
 }
 }
 }
break;
case "mute":

if (!message.channel.permissionsFor(message.member).hasPermissions("MUTE_MEMBERS")){
    message.reply("Tu n'as pas le droit de mute des joueurs !");
}else{
var membermute = message.mentions.members.first();
if(!membermute){
    message.reply("Ce joueur n\'existe pas !");
}else{
message.guild.member(membermute).addRole("Muted").then((member) => {
    message.channel.send(`${member.displayName} a été mute ! `);
    console.log(`${member.displayName} a été mute ! `);
}).catch(() => {
    message.channel.send("Mute refusé !")
    console.log(`Mute refusé !`);
})}}
break;
 
 
 
  }
  
 
     if (message.content === prefix + "help"){
         var help_embed = new Discord.RichEmbed()
         .setColor("#D9F200")
         .addField("Commandes du bot !", "    - !help: Affiche les commandes du bot!")
         .addField("Interactions", "   Commandes possibles : ")
         .addField("- !kick: Permet de Kicker un joueur", "   Modérateur seulement !")
         .addField("- !ban: Permet de ban un joueur", "   Modérateur seulement !")
         .addField("- !mute: Permet de mute un joueur", "   Modérateur seulement !")
         .addField("- !forum Trust: Permet de voir le forum", "   Tout le monde !")
         .addField("- !purge: Permet de supprimer des messages",  "    Modérateur seulement !")
         .addField("- !site: Permet de voir le site", "   Tout le monde !")
         

         message.channel.sendEmbed(help_embed);
         //message.channel.sendMessage("Voici les commandes du bot :\n -/help pour afficher les commandes");
         
        console.log("Commande Help demandée !");  
 
     }
 });
 
 bot.on("message" , message => {
     if (message.content.toUpperCase() === "BONJOUR"){
         message.reply("Bonjour");
         console.log("Bonjour Bonjour");
    }});

bot.on("message" , message => {
    if (message.content.toUpperCase() === "BONSOIR"){
    message.reply("Bonsoir");
    console.log("Bonsoir Bonsoir");
    }});
bot.on("message" , message => {
    if (message.content.toUpperCase() === "BONNE NUIT"){
    message.reply("Bonne nuit !");
    console.log("Bonne nuit Bonne nuit");
    }});
bot.on("message" , message => {
    if (message.content.toUpperCase() === "MERCI"){
    message.reply("De rien !");
    console.log("Merci De rien");
    }});

    bot.on("message" , message => {
        if (message.content.toUpperCase() === "!FORUM TRUST"){
        message.reply("http://trust-gaming.fr/forum/index.php");
        console.log("http://trust-gaming.fr/forum/index.php");
        }});
bot.on("message" , message => {
        if (message.content.toUpperCase() === "SALUT"){
        message.reply("Salut");
        console.log("salut");
        }});

 bot.on("message" , message => {
        if (message.content.toUpperCase() === "!SITE"){
        message.reply("http://trust-gaming.fr/minecraft.php");
        console.log("http://trust-gaming.fr/minecraft.php");
        }});
    
    

               
               

