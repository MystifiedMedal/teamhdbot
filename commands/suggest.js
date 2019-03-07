const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
      const Sug = args.join(" ");
    
    let SugEmbed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .addField("**Suggestion:**", Sug)
      .addField("**Suggestion By**", `${message.author}`)
    
      let sugchannel = message.guild.channels.find(`name`, "suggestions");
        sugchannel.send(SugEmbed);
    message.channel.send("**Your suggestion has been sent successfully**");
   }
   
 
module.exports.help = {
  name: "suggest"
}
