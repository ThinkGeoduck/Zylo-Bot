const { MessageEmbed, DiscordAPIError, Discord } = require("discord.js");
const { readdirSync } = require("fs");
const { MessageButton , MessageActionRow } = require("discord-buttons");
const db = require('quick.db');
const { stripIndents } = require("common-tags");
const { cyan } = require("../../JSON/colours.json");
const { PREFIX } = require('../../config');

module.exports = {
    config: {
        name: "help",
        aliases: ["h"],
        usage: "[command name] (optional)",
        category: "info",
        description: "Displays all commands that the bot has.",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {
        let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
        const hembed = new MessageEmbed()
        .setTitle("Need Help? Here are my commands that you can try!")
        .setDescription(`**Click the buttons below to view the commands of individual categories!\nMy Prefix for ${message.guild} is  \`${prefix}\` !**`, true)
        .addField("<:SS_Moderation:868001824244903947> | Moderation" , `Check out my moderation commands to power up your server!`, true)
        .addField("<:Musica:868002118357876767> | Music" , `Feel tired? Listen to amazing songs using the music module!`, true)
        .addField("<:Currency:868002697238966292> | Economy" , `Play Economy games!`)
        .addField("<:Games:868005077321941043> | Games" , `Feel Bored? Play some games against the bot and your friends`, true )
        .addField("<:Info:868004013419946014> | Info", `Get many Informations!`, true)
        .addField("<:fun:868002284150341633> | Fun" , `See all the fun commands!`, true)
        .addField("<:Image:868002808312500244> | Image" , `Sends a edited image by the bot!\n\n [Support Server](https://discord.gg/xzRPYU5xe4) | [Invite Me](https://discord.com/oauth2/authorize?client_id=778207086558838785&permissions=8&scope=bot)`, true)
        .setColor("#b8faff")
    
        
        const moderation = new MessageButton()
        .setStyle("green")
        .setLabel('Moderation')
        .setID("hmoderation")
    
        const music = new MessageButton()
        .setStyle("green")
        .setLabel("Music")
        .setID("hmusic")
        
        const economy = new MessageButton()
        .setStyle("green")
        .setLabel("Economy")
        .setID("heconomy")

        const games = new MessageButton()
        .setStyle("green")
        .setLabel("Games")
        .setID("hgames")

        const  info = new MessageButton()
        .setStyle("green")
        .setLabel("Info")
        .setID("hinfo")
        
        const  fun = new MessageButton()
        .setStyle("green")
        .setLabel("Fun")
        .setID("hfun")
    
        const image = new MessageButton()
        .setStyle("green")
        .setLabel("Image")
        .setID("himage")
        
        let buttonrow1 = new MessageActionRow()
        .addComponent(moderation)
        .addComponent(music)
        .addComponent(economy)
        .addComponent(games)
        
        let buttonrow2 = new MessageActionRow()
        .addComponent(info)
        .addComponent(fun)
        .addComponent(image)

    if (!args[0]) return message.channel.send({
        components: [buttonrow1 , buttonrow2] , 
        embed: hembed 
    })
else {
    const sembed = new MessageEmbed()
    let command = bot.commands.get(bot.aliases.get(args[0]?.toLowerCase()) || args[0]?.toLowerCase())
    if (!command) return message.channel.send(sembed.setTitle("**Invalid Command!**").setDescription(`**Do \`${prefix}help\` For the List Of the Commands!**`))
    command = command.config

      const embed = new MessageEmbed()
        embed.setDescription(stripIndents`**The Bot's Global Prefix Is \`${PREFIX}\`**\n
        **Server Prefix Is \`${prefix}\`**\n
        ** Command -** ${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}\n
        ** Description -** ${command.description || "No Description provided."}\n
        **Category -** ${command.category}\n
        ** Usage -** ${command.usage ? `\`${prefix}${command.name} ${command.usage}\`` : "No Usage"}\n
        ** Accessible by -** ${command.accessableby || "everyone"}\n
        ** Aliases -** ${command.aliases ? command.aliases.join(", ") : "None."}`)
        embed.setFooter(message.guild.name, message.guild.iconURL())

       if (args[0]) return message.channel.send(embed)
    }
}
}

