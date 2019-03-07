const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   let muteuser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!muteuser) return message.reply("Couldn't find user.");
  if(muteuser.hasPermission("KICK_MEMBERS")) return message.reply("Can't mute them!");
  let muterole = message.guild.roles.find(`name`, "Muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  } 

 let mutetime = args[1];
  if(!mutetime) return message.reply("You didn't specify a time!");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted!`);
  }, ms(mutetime));

}  
 
module.exports.help = {
  name: "mute"
}
