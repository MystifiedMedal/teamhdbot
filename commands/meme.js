const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 let mememsg = await message.channel.send("**Generating a Meme**")
 var superagent = require('superagent'); 
 
 let {body} = await superagent
 .get(`https://api-to.get-a.life/meme`)
 
 if(!{body}) return message.channel.send("*Something happened, try again")
      
      let memeEmbed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("Meme :stuck_out_tongue_winking_eye:")
      .setImage(body.url)
      
      message.channel.send(memeEmbed);
      mememsg.edit("**Meme Generated**");
  } 
 
module.exports.help = {
  name: "meme"
}
