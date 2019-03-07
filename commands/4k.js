const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var superagent = require('superagent'); 
    if(message.member.roles.find("name", "NSFW Access")){
    if (message.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: '4k'})
    .end((err, response) => {
      message.channel.send({ file: response.body.message });
    });
  } else {
    message.channel.send("**This is not NSFW channel!**")
  }}} 
 
module.exports.help = {
  name: "4k"
}
