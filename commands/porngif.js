const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var superagent = require('superagent'); 
     if (message.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'pgif'})
    .end((err, response) => {
      message.channel.send({ file: response.body.message });
    });
  } else {
    message.channel.send("This isn't NSFW channel!")
  }
}; 
 
module.exports.help = {
  name: "porngif"
}
