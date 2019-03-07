const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const Ann = args.join(" ");
      let annchannel = message.guild.channels.find(`name`, "announcements");
        annchannel.send(Ann);
   }
  
 
module.exports.help = {
  name: "announce"
}
