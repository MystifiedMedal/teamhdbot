//discord.js client
const Discord = require("discord.js");

//secure
const fs = require("fs");

//bot-client
const bot = new Discord.Client({disableEveryone: true});

//time-converter
const ms = require("ms");

//gets source from webpages
const superagent = require('superagent'); 

//other constants
const CHANNEL = 'logs';

//bot configuration.. Go to config.json to edit bot's info
const config = require("./config.json");

//command handler
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

//sends message to console and sets activity

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  console.log("This Bot was Made by MystifiedMedal");
  bot.user.setActivity("Type hd!help for commands!", {type: "STREAMING"});

});

//user joins
bot.on('serverNewMember', function(server, user) {
     user.addTo(server.roles.get("name", "Member"));
});

//detects deleted message

bot.on('messageDelete', function(message) {

    if(message.channel.type == 'text') {
		let delicon = message.author.displayAvatarURL;
		    let deleteEmbed = new Discord.RichEmbed()
    .setDescription("**Message Deleted!** :fire:")
    .setColor("#f44b42")
    .addField("Deleted Message:", message.cleanContent)
    .addField("Deleted By", `<@${message.author.id}>`)
    .addField("Deleted In", message.channel)
    .addField("Time Deleted", message.createdAt)
    .setThumbnail(delicon)

        //post in the guild's log channel
        var log = message.guild.channels.find('name', CHANNEL);
        if (log != null)
		    log.sendMessage(deleteEmbed);

    }

});
//detects edited message

bot.on('messageUpdate', function(oldMessage, newMessage) {

    if (newMessage.channel.type == 'text' && newMessage.cleanContent != oldMessage.cleanContent) {

      let editicon = newMessage.author.displayAvatarURL;
		    let editEmbed = new Discord.RichEmbed()
    .setDescription("**Message Edited!** :pencil: ")
    .setColor("#f4cb42")
    .addField("Orignal Message:", oldMessage.cleanContent)
    .addField("Edited Message:", newMessage.cleanContent)
    .addField("Edited By", `<@${oldMessage.author.id}>`)
    .addField("Edited In", oldMessage.channel)
    .addField("Time Edited", newMessage.createdAt)
    .setThumbnail(editicon)

        //post in the guild's log channel
        var log = newMessage.guild.channels.find('name', CHANNEL);
        if (log != null)
            log.sendMessage(editEmbed);
    }

});

//bot continued

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

});

bot.login(config.token);
