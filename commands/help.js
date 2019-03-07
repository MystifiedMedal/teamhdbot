const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let bicon = bot.user.displayAvatarURL;
    let helpEmbed = new Discord.RichEmbed()
    .setDescription("Bot Info")
    .setColor("RANDOM")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt);
	
	let help2Embed = new Discord.RichEmbed()
    .setDescription("Commands")
    .setColor("RANDOM")
    .addField("Fun commands", "hd!avatar | hd!meme | hd!say | hd!8ball | hd!ping")
    .addField("Staff commands", "hd!report | hd!suggest")	
    .addField("Info commands", "hd!serverinfo | hd!botinfo")
  
  let help3Embed = new Discord.RichEmbed()
    .setDescription("NSFW Access Only!")
    .setColor("RANDOM")
    .addField("Lewd commands", "hd!porngif | hd!4k | hd!nsfwmsg | hd!ass | hd!anal | hd!hentai | hd!thigh")
          
   message.member.send(helpEmbed);
   message.member.send(help2Embed);
           if(message.member.roles.find("name", "NSFW Access")){
    message.member.send(help3Embed); }
    message.channel.send("**Help has been sent to your DMs**");

    return;
  }
 
module.exports.help = {
  name: "help"
}
