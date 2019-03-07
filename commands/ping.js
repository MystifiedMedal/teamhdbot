const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.channel.send('**Ping?**').then(m => m.edit(`**Ping:**: ${message.createdTimestamp - m.createdTimestamp}ms.`))
  }
module.exports.help = {
  name: "mute"
}
