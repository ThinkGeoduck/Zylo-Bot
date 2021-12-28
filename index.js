const { Client, MessageAttachment, Collection, MessageEmbed, DiscordAPIError, IntegrationApplication, Integration } = require('discord.js');
const { PREFIX, TOKEN, DBL_API_KEY } = require('./config');
const bot = new Client({ disableMentions: 'everyone' })
intents: ["GUILDS","GUILD_MESSAGES", "GUILD_MEMBERS" , "GUILD_BANS" , "GUILD_INTEGRATIONS" , "GUILD_PRESENCES" , "GUILD_MESSAGE_REACTION" , "DIRECT_MESSAGES" , "GUILD_INVITES"];
require('discord-buttons')(bot)
const DBL = require('dblapi.js');
const dbl = new DBL(DBL_API_KEY)
const fs = require("fs");
const db = require('quick.db');
const jimp = require('jimp');
const { messageButton , MessageActionRow, default: discordButtons, MessageButton } = require("discord-buttons");

run: async (bot, message, args) => {
    let prefix;
    let fetched = await db.fetch(`prefix_${message.guild.id}`);
    if (fetched === null) {
        prefix = PREFIX
    } else {
        prefix = fetched
    }
}
bot.guilds.cache.forEach(x => console.log(`${x.name} : ${x.id}`))

bot.on('clickButton', async (button) => { 

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

    if (button.id === 'hmusic') {
        button.reply.defer()
        
        const musicembed = new MessageEmbed()
     .setTitle("Music")
     .setDescription("")
     .addField("Commands","`loop`- **Repeats all songs in the queue**\n `lyrics`- **Shows lyrics of the song being played**\n `musictrivia`- **Music trivia for you**\n `nowplaying`- **Shows currently playing song**\n `pause`- **Pause the currently playing music**\n `play`- **Plays song**\n `queue`- **Shows Queued songs**\n `remove`- **Remove a song in a queue**\n `resume`- **Resumes the music**\n `search`- **Searches for a song from Youtube**\n `shuffle`- **Shuffles the Music in the queue**\n `skip`- **Skips a song**\n `skipall`- **Skips all songs in queue**\n `skipto`-**Skips To A Particular Song In Queue**\n `stop`- **Stops the music**\n `stopmusictrivia`- **Stops the ongoing musictrivia**\n `volume`- **Shows and changes volume**")
     .setColor("#9eddff")
     .setTimestamp(Date.now())

    button.message.edit({
        components: [buttonrow1 , buttonrow2],  
        embed:musicembed
      })
    }

    if(button.id === 'hmoderation') {
        button.reply.defer()
        
        const membed = new MessageEmbed()
        .setTitle("Moderation")
        .setDescription("")
        .addField("Commands List", "`addrole`- **Adds role to a user**\n `ban`- **Bans a user**\n `disablemodlogchannel`- **Disables Log channel**\n `disablemuterole`- **Disables the mute role**\n `disableverification0`- **Disable\'s Server Verification System**\n `disablewelcomechannel`- **Disables server welcome channel**\n `disableexp`- **Disables server's XP messages**\n `kick`- **Kicks a user**\n `mute`- **Mutes a user**\n `purge`- **Clear Messages**\n `removerole`- **Removes role from a user**\n `setmodlogchannel`- **Sets a log chanel**\n `setmuterole`- **Sets a mute role for the server**\n `setnick`- **Changes user's nickname**\n `setprefix`- **Sets a custom prefix for the server**\n `setverification`- **Sets Verification Channel And Role**\n `setwelcomechannel`- **Sets a welcome channel for the server**\n `setxp`- **Enables Server XP Messages**\n `unban`- **Unban a user from the guild**\n `unmute`- **Unmute a userfrom the guild**\n `verify`- **'Use This To Get Verified In A Server**\n `warn`- **Reports a user in the guild**")
        .setColor("#ff8b6b")
        .setTimestamp(Date.now())
       
        button.message.edit({
            components: [buttonrow1 , buttonrow2],  
            embed:membed
          })
        }
    
    if (button.id === 'heconomy') {
        button.reply.defer()

        const ecoembed = new MessageEmbed()
        .setTitle('Economy')
        .setDescription("")
        .addField("Commands List" , "`addmoney`- **Adds Money to a user**\n `balance`- **Shows Current Balance**\n `beg`- **Beg for money**\n `buy`- **Buy items from the store**\n `daily`- **Gives You 200 per day**\n `deposit`- **Deposit money to yout bank**\n `fish`- **Catch A Fish From A Vast Ocean**\n `leaderboard`- **Shows Server\'s Top 10 Users of Economy Leaderboard**\n `pay`- **Pay to Somebody**\n `profile`- **Shows user profile**\n `removemoney`- **Removes money from a user**\n `rob`- **Robs a user**\n `roulette`- **Bet a colour to win or lose**\n `sell`- **Sell to somebody**\n `setbackground`- **Sets Profile Background**\n `setinfo` -**Sets your profile description**\n `slots`- **Play Slots Game**\n `store`- **Shows list of items in the store**\n `weekly`- **Gives You 5000 per Day**\n `withdraw`- **Withdraw money from your bank**\n `work`- **Work to earn money**")
        .setColor('#a3ffb3')
        .setTimestamp(Date.now())
    
        button.message.edit({
            components: [buttonrow1 , buttonrow2],  
            embed:ecoembed
          })
    }
    
     if(button.id === 'hfun') {
         button.reply.defer()

         const fembed = new MessageEmbed()
         .setTitle("Fun")
         .setDescription("")
         .addField("Commands List" , "`coinflip`- **Flips a coin**\n `meme`- **Sends a meme**\n `motivation`- **Get a random motivation quote**\n `roast`- **Roasts People**\n `say`- **Says your input via the bot**\n `soundboard`- **Plays A Sound in A Voice Channel**\n `status`- Get a user's Status\n `tts`- **Covert Text-To-Speech**\n `urbandictionary`- ** Get information about urban words!**")
         .setColor("#ffc95c")
         .setTimestamp(Date.now())

         button.message.edit({
            components: [buttonrow1 , buttonrow2],  
            embed:fembed
          })
        }

     if(button.id === 'hinfo') {
         button.reply.defer()

         const infoembed = new MessageEmbed()
         .setTitle("Info")
         .setDescription("")
         .addField("Commands List" , "`channelinfo` - **Get info about a channel**\n `help` - **Displays all the command that bot has**\n `invitations`- **Shows Users Joined Through Someone's Invites**\n `level`- **- Shows A User's Current XP Level**\n `news`- **Replies with the 5 latest world news headlines**\n `ping`- **Displays User And Bot Latency**\n `poll`- **Hosts a poll**\n `roleinfo`- **Shows stats of the mentioned role**\n `rolememberinfo`- **Shows List Of Members Having A Role**\n `serverinfo`- **Shows server stats**\n `translate`- **Translate to any language using yandex translation service (only supported lanugages)**\n `uptime`- **Shows the Bot Uptime**\n `weather`- **Shows weather of a city**\n `whois`- **Returns user information**\n `wikipedia`- **Shows Results From Wikipedia**")
         .setColor("#ffabab")
         .setTimestamp(Date.now())

         button.message.edit({
            components: [buttonrow1 , buttonrow2],  
            embed:infoembed
          })
        }

     if(button.id === 'hgames') {
     button.reply.defer()

     const gameembed = new MessageEmbed()
     .setTitle("Games")
     .setDescription("")
     .addField("Commands List", "`akinator`- **Think About A Real or Fictional Character, I Will Try To Guess it**\n `blackjack`- **Play a game of Blackjack**\n `connectfour`- **Play A Game Of Connect Four With Another User Until Four Horizontal Or Vertical Lines Are Connected**\n `duelquiz`- ** Answer A Series Of Quiz Questions Against another user!**\n `gunfight`- **Engage In A Gunfight Against Another User**\n `horserace`- **Bet On The Fastest Horse In A 6-Horse Race**\n `memory`- **Test Your Memory**\n `rps`- **Play Rock, Paper, Scissors with the bot!**\n `russianroulette`- **Who Will Pull The Trigger And Die First? You Can Play Against Bots Too**\n `tictactoe`- **Play A Game Of TicTacToe With Another User**\n `trivia`- **Play Trivia**")
     .setColor("#e0feff")
     .setTimestamp(Date.now())

     button.message.edit({
        components: [buttonrow1 , buttonrow2],  
        embed:gameembed 
      })
    }

     if(button.id === 'himage') {
       button.reply.defer()

       const iembed = new MessageEmbed()
       .setTitle("Image")
       .setDescription("")
       .addField("Commands List", "`avatar`- **Returns an user's avatar**\n `avatarfusion`- **Makes avatar Fusion**\n `captcha`- **Shows Captcha Image Of An User**\n `clyde`- **Shows image Sent By Clyde Bot**\n `facepalm`- **Shows Facepalmed User**\n `gif`- **Provide a query and get a gif!**\n `love`- **Shows Image of 2 Lovers, 3 persons**\n `tweet`- **Sends a Tweet**")
       .setColor("#96ff8f")
       .setTimestamp(Date.now())

       button.message.edit({
        components: [buttonrow1 , buttonrow2],  
        embed: iembed
      })
    }
     

  });

bot.phone = new Collection();
bot.commands = new Collection();
bot.aliases = new Collection();

["aliases", "commands"].forEach(x => bot[x] = new Collection());
["console", "command", "event"].forEach(x => require(`./handler/${x}`)(bot));

bot.categories = fs.readdirSync("./commands/");

["command"].forEach(handler => {
    require(`./handler/${handler}`)(bot);
});
bot.on('ready', () => {
    setInterval(() => {
        dbl.postStats(bot.guilds.cache.size);
    }, 1800000);
});

bot.on('message', async message => {
    let prefix;
    if (message.author.bot || message.channel.type === "dm") return;
        try {
            let fetched = await db.fetch(`prefix_${message.guild.id}`);
            if (fetched == null) {
                prefix = PREFIX
            } else {
                prefix = fetched
            }
        } catch (e) {
            console.log(e)
    };
  
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let messageFetch = db.fetch(`guildMessages_${message.guild.id}`)
    if (messageFetch === null) return;

    db.add(`messages_${message.guild.id}_${message.author.id}`, 1)
    let messagefetch = db.fetch(`messages_${message.guild.id}_${message.author.id}`)

    let messages;
    if (messagefetch == 0) messages = 0; //Level 0
    else if (messagefetch == 100) messages = 100; // Level 1
    else if (messagefetch == 200) messages = 200; // Level 2
    else if (messagefetch == 300) messages = 300; // Level 3
    else if (messagefetch == 400) messages = 400; // Level 4
    else if (messagefetch == 500) messages = 500; // Level 5
    else if (messagefetch == 600) messages = 600; // Level 6
    else if (messagefetch == 700) messages = 700; // Level 7
    else if (messagefetch == 800) messages = 800; // Level 8
    else if (messagefetch == 900) messages = 900; // Level 9
    else if (messagefetch == 1000) messages = 1000; // Level 10
    else if (messagefetch == 1100) messages = 1100; // Level 11
    else if (messagefetch == 1200) messages = 1200; // Level 12
    else if (messagefetch == 1300) messages = 1300; // Level 13
    else if (messagefetch == 1400) messages = 1400; // Level 14
    else if (messagefetch == 1500) messages = 1500; // Level 15
    else if (messagefetch == 1600) messages = 1600; // Level 16
    else if (messagefetch == 1700) messages = 1700; // Level 17
    else if (messagefetch == 1800) messages = 1800; // Level 18
    else if (messagefetch == 1900) messages = 1900; // Level 19
    else if (messagefetch == 2000) messages = 2000; // Level 20
    else if (messagefetch == 2100) messages = 2100; // Level 21
    else if (messagefetch == 2200) messages = 2200; // Level 22
    else if (messagefetch == 2300) messages = 2300; // Level 23
    else if (messagefetch == 2400) messages = 2400; // Level 24
    else if (messagefetch == 2500) messages = 2500; // Level 25
    else if (messagefetch == 2600) messages = 2600; // Level 26
    else if (messagefetch == 2700) messages = 2700; // Level 27
    else if (messagefetch == 2800) messages = 2800; // Level 28
    else if (messagefetch == 2900) messages = 2900; // Level 29
    else if (messagefetch == 3000) messages = 3000; // Level 30
    else if (messagefetch == 3100) messages = 3100; // Level 31
    else if (messagefetch == 3200) messages = 3200; // Level 32
    else if (messagefetch == 3300) messages = 3300; // Level 33
    else if (messagefetch == 3400) messages = 3400; // Level 34
    else if (messagefetch == 3500) messages = 3500; // Level 35
    else if (messagefetch == 3600) messages = 3600; // Level 36
    else if (messagefetch == 3700) messages = 3700; // Level 37
    else if (messagefetch == 3800) messages = 3800; // Level 38
    else if (messagefetch == 3900) messages = 3900; // Level 39
    else if (messagefetch == 4000) messages = 4000; // Level 40
    else if (messagefetch == 4100) messages = 4100; // Level 41
    else if (messagefetch == 4200) messages = 4200; // Level 42
    else if (messagefetch == 4300) messages = 4300; // Level 43
    else if (messagefetch == 4400) messages = 4400; // Level 44
    else if (messagefetch == 4500) messages = 4500; // Level 45
    else if (messagefetch == 4600) messages = 4600; // Level 46
    else if (messagefetch == 4700) messages = 4700; // Level 47
    else if (messagefetch == 4800) messages = 4800; // Level 48
    else if (messagefetch == 4900) messages = 4900; // Level 49
    else if (messagefetch == 5000) messages = 5000; // level 50

    if (!isNaN(messages)) {
        db.add(`level_${message.guild.id}_${message.author.id}`, 1)
        let levelfetch = db.fetch(`level_${message.guild.id}_${message.author.id}`)

        let levelembed = new MessageEmbed()
            .setColor('GREEN')
            .setDescription(`**${message.author}, You Have Leveled Up To Level ${levelfetch}**`)
            .setFooter(`${prefix}disablexp To Disable Level Up Messages`)
        message.channel.send(levelembed);
    };
});

bot.on('message', async message => {
    let prefix;
        try {
            let fetched = await db.fetch(`prefix_${message.guild.id}`);
            if (fetched == null) {
                prefix = PREFIX
            } else {
                prefix = fetched
            }
        } catch (e) {
            console.log(e)
    };
    try {
        if (message.mentions.has(bot.user) && !message.mentions.has(message.guild.id)) {
            return message.channel.send(`**My Prefix In This Server is - \`${prefix}\`**`)
        }
    } catch {
        return;
    };
});

bot.on('message', async message => {
  
    try {
        const hasText = Boolean(message.content);
        const hasImage = message.attachments.size !== 0;
        const hasEmbed = message.embeds.length !== 0;
        if (message.author.bot || (!hasText && !hasImage && !hasEmbed)) return;
        const origin = bot.phone.find(call => call.origin.id === message.channel.id);
        const recipient = bot.phone.find(call => call.recipient.id === message.channel.id);
        if (!origin && !recipient) return;
        const call = origin || recipient;
        if (!call.active) return;
        await call.send(origin ? call.recipient : call.origin, message, hasText, hasImage, hasEmbed);
    } catch {
        return;
    };
});

bot.on("guildMemberAdd", async member => {
    if (member.user.bot) return;
    let user = member.user
    let channelID = db.get(`joinChannel_${member.guild.id}`)
   if (channelID === null) return;
   let channel = member.guild.channels.cache.get(channelID)
   if (!channel) return;
    let joinMsg = db.get(`joinmsg_${member.guild.id}`)
    if (!joinMsg) return;
    let send = joinMsg
   .split("{member-mention}").join("<@" + user.id + ">")
   .split("{member-tag}").join(user.tag)
   .split("{member-username}").join(user.username)
   .split("{member-id}").join(user.id)
   .split("{member-created:duration}").join(moment(user.createdTimestamp).fromNow())
   .split("{member-created:date}").join(moment(user.createdTimestamp).format("YYYY/MM/DD"))
   .split("{server-name}").join(member.guild.name)
   .split("{server-memberCount}").join(member.guild.members.cache.size)
   channel.send(send)
  })
  bot.on("guildMemberRemove", async member => {
   if (member.user.bot) return;
   let user = member.user
   let channelID = db.get(`leaveChannel_${member.guild.id}`)
   if (channelID === null) return;
   let channel = member.guild.channels.cache.get(channelID)
   if (!channel) return;
   let leaveMsg = db.get(`leavemsg_${member.guild.id}`)
   if (leaveMsg === null) return;
   let send = leaveMsg
   .split("{member-tag}").join(user.tag)
   .split("{member-username}").join(user.username)
   .split("{member-id}").join(user.id)
   .split("{member-created:duration}").join(moment(user.createdTimestamp).fromNow())
   .split("{member-created:date}").join(moment(user.createdTimestamp).format("YYYY/MM/DD"))
   .split("{server-name}").join(member.guild.name)
   .split("{server-memberCount}").join(member.guild.members.cache.size)
   channel.send(send)
  })
  

const express = require("express");
const app = express();

const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];
app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/dreams", (request, response) => {
  response.json(dreams);
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

bot.login(TOKEN);
