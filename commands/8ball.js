const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes, definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ];      
      if(!args[0]){
  return message.channel.send(":x: " + "| Please Enter A Question You Would Like Answered")
}
if (args[0]) message.channel.send(responses[Math.floor(Math.random() * responses.length)]);
else message.channel.send(":x: " + "| I Wasnt Able To Read That :(");
}
 
module.exports.help = {
  name: "8ball"
}
