const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	if(message.member.hasPermission("KICK_MEMBERS")) {
  
	let modhelpEmbed = new Discord.RichEmbed()
    .setDescription("ModCommands")
    .setColor("RANDOM")
    .addField("Commands :-", "**hd!kick | hd!ban | hd!announce | hd!clear | hd!tempmute**")
    
    message.member.send(modhelpEmbed);
    message.channel.send("**Hi fellow moderator/admin... Help has been sent to your DMs**");

    return;
  }}  
 
module.exports.help = {
  name: "modhelp"
}
