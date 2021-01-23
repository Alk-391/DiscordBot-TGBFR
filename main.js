//-----------------------------------------------------------------------------------------------
//TGBFR Code - JavaScript
// Antoo & OPS-LightOxygen
//-----------------------------------------------------------------------------------------------
var discord = require("discord.js");
var bot = new discord.Client();
var config = require("./config.json");
var client = require("./client.json");
var tgbfr = require("./tgbfr.json");

bot.on("ready", () => {
    bot.user.setPresence({ game: { name: ">help | " + bot.users.size + " users | " + bot.guilds.size + " servers", type: "WATCHING"}, status: "dnd"});
    console.log("TGBFR Connected!" + "\n" + "Prefix: >");
})

bot.on("message", msg => {
    if (msg.author.bot) return;
    if (msg.content.indexOf(config.prefix) !== 0) return;
    var args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
    var command = args.shift().toLowerCase();



// General Commands

        if (command.startsWith("help")) {
            var Mod = new discord.RichEmbed()
                .setTitle("Commands Of TGBFR")
                .setDescription("General Commands")
                .setColor("#2aff00")
                .setAuthor(client.username, client.avatarURL)
                .addField("info", "If someone uses this command I will get Informations About Me.")
                .addField("avatar <@user>", "Make this command and I give to you the avatar of mentionned user.")
                .addField("date", "Execute this command and I’ll give you the time.")
                .addField("say <msg>", "If anyone uses this command I would say the user have said word or a sentence.")
                .addField("8ball <question>", "I will reply to your question with my greatest inspiration and all my sincerity.")
                .addField("suggest <suggestion>", "With this command you can share with us your suggestion for the bot it will be send in Support Server")
                .setThumbnail(client.avatarURL)
            msg.channel.send(Mod).catch(function(){console.error("Rejected")});
            msg.delete(100);
        }


        if (command.startsWith("help")) {
            var Mod = new discord.RichEmbed()
                .setTitle("Commands Of TGBFR")
                .setDescription("Mod Commands")
                .setColor("#FF0033")
                .setAuthor(client.username, client.avatarURL)
                .addField("kick <@user> <Reason of kick>", "If a Mod or Admin uses this command I kick the user mentioned for the reason mentioned.")
                .addField("ban <@user> <Reason of ban>", "If a Mod or Admin uses this command I ban the user mentioned for the reason mentioned.")
                .addField("unban <ID>", "If a Mod or Admin uses this command I unban the user by his/her ID.")
                .setThumbnail(client.avatarURL)
            msg.channel.send(Mod).catch(function(){console.error("Rejected")});
            msg.delete(100);
        }

        if (command.startsWith("info")) {
            var Info = new discord.RichEmbed()
                .setTitle("About TGBFR")
                .setDescription("Informations about TGBFR")
                .setColor("#ffda00")
                .setAuthor(client.username, client.avatarURL)
                .setThumbnail("https://tiny.cc/tgbfrinvite/qr/image/L/150")
                .addField("Name Of Bot", "TGBFR#8166")
                .addField("Prefix", ">")
                .addField("Code Language", "JavaScript")
                .addField("Utility", "Moderation Bot & Fun")
                .addField("Owner", "<@257230419966164993>")
                .addField("Developpers", "<@417291543372627969> & <@257230419966164993>")
                .addField("First Activity", "26/08/2018")
                .addField("Support server", "http://tiny.cc/tgbfr_support")
                .addField("Invite Link", "https://tiny.cc/tgbfrinvite")
            msg.channel.send(Info).catch(function(){console.error("Rejected")});

            msg.delete(100);
        }
        

// Fun Commands 

        if (command.startsWith("avatar")) {
            let user = msg.mentions.users.first() || msg.author;

            let embed = new discord.RichEmbed()
                .setAuthor(user.username)
                .setImage(user.displayAvatarURL)
                .setColor("RANDOM")
            msg.channel.send(embed).catch(function(){console.error("Rejected")});
            msg.delete(100);
        }

        if (command.startsWith("date")) {
        var dateembed = new discord.RichEmbed()
        .setTitle("Actual Time:")
        .setColor("RANDOM")
        .setDescription(new Date())

        msg.channel.send(dateembed).catch(function(){console.error("Rejected")});
        msg.delete(100);
        }


        if (command.startsWith("say")) {
  let text = args.join(" ");
  msg.delete();

            let embed = new discord.RichEmbed()
                .setDescription(text)
                .setColor("#7289DA")
                .setFooter(msg.guild.members.get(msg.author.id).displayName, msg.author.displayAvatarURL)
  msg.channel.send(embed).catch(function(){console.error("Rejected")});
  msg.delete(100);
        }

        if (command.startsWith("8ball")) {
            ballMessage = msg.content.slice(7);
            number = 11;
            var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
            switch (random) {
                case 1: msg.reply("«" + ballMessage + " » - Maybe..."); break;
                case 2: msg.reply("«" + ballMessage + " » - Yes, Sure."); break;
                case 3: msg.reply("«" + ballMessage + " » - No, No, and No!"); break;
                case 4: msg.reply("«" + ballMessage + " » - So **E = mc²**, if we multiplie the mass **m** of a body by the physical varant **c** squared, then we obtain an energy.  Under certain circumstances, a mass **m** can be transformed into energy **E**."); break;
                case 5: msg.reply("«" + ballMessage + " » - I don't know ^^'"); break;
                case 6: msg.reply("«" + ballMessage + " » - Huh, can you repeat please ? I wasn't listening you."); break;
                case 7: msg.reply("«" + ballMessage + " » - OOF!"); break;
                case 8: msg.reply("«" + ballMessage + " » - Duh!"); break;
                case 9: msg.reply("«" + ballMessage + " » - Excuse me.. Who are you?"); break;
                case 10: msg.reply("«" + ballMessage + " » - Bruh!"); break;
                case 11: msg.reply("«" + ballMessage + " » - Looooool!!!"); break;
            }
         msg.delete(100);

        }

// Mod  & Admin Commands

        if (command.startsWith("del")) {
         let del = args[0]
         var amount = parseInt(args[0]) + 1;
         let embed = new discord.RichEmbed()
                .setTitle("Error!")
                .setColor("#FF0000")
                .setDescription("You need MANAGE_MESSAGES permission to do this command.")

            if (msg.guild.member(msg.author).hasPermission("MANAGE_MESSAGES")) {
                msg.channel.bulkDelete(amount);
                msg.channel.send("🗑 Deleted " + del + " messages.").catch(function(){console.error("Rejected")});
            } else {
                    msg.channel.send(embed).catch(function(){console.error("Rejected")});
                   }
        }

        if (command.startsWith("kick")) {
         let ToKick = msg.mentions.members.first();

         if (ToKick) {
              if (msg.guild.member(msg.author).hasPermission("KICK_MEMBERS" | "ADMINISTRATOR")) {
                   if (msg.guild.me.hasPermission("4" | "8")) {
                      if (ToKick.kickable) {
                         let Reason = args.slice(1).join(" ");

                         if (Reason.length == 1) {
                              ToKick.send("You've been kicked from: " + msg.guild.name);
                         } else {
                                ToKick.send("You've been kicked from: " + msg.guild.name + " for the following reason: " + Reason);
                            }

                                   ToKick.kick(7, ).then(e => {
                              msg.channel.send("**" + ToKick.displayName + "** **_was kicked from the server for:_** **" + Reason + "**").catch(function(){console.error("Rejected")});
                            })
                        } else {
                         var Error = new discord.RichEmbed()
                                .setTitle("Error")
                                .setColor("#FF0000")
                                .setDescription("An error has occured.")
                                .addField("This user can't be kicked", "Tell about it with an Server Admin.")
                                .setTimestamp(new Date())
                                .setFooter("", bot.user.avatarURL)
                            msg.channel.send(Error).catch(function(){console.error("Rejected")});
                        }
                    } else {
                        var Error = new discord.RichEmbed()
                            .setTitle("Error")
                            .setColor("#FF0000")
                            .setDescription("An error has occured.")
                            .addField("I need the following permissions to do this:", "KICK_MEMBERS \n**OU**\nADMINISTRATOR")
                            .setTimestamp(new Date())
                            .setFooter("", bot.user.avatarURL)
                        msg.channel.send(Error).catch(function(){console.error("Rejected")});
                    }
             } else {
                    var Error = new discord.RichEmbed()
                        .setTitle("Error")
                        .setColor("#FF0000")
                        .setDescription("An error has occured.")
                        .addField("Necessary permissions to do this:", "KICK_MEMBERS \n**OU**\nADMINISTRATOR")
                        .setTimestamp(new Date())
                        .setFooter("", bot.user.avatarURL)
                    msg.channel.send(Error).catch(function(){console.error("Rejected")});
                }
            } else {
                var Info = new discord.RichEmbed()
                    .setTitle("kick <@user> <Reason>")
                    .setColor("#F47B67")
                    .setDescription("Informations about this command.")
                    .addField("kick <@user> <Reason>", "Kick a user from the server")
                    .addField("Necessary permissions:", "KICK_MEMBERS \n**OU**\nADMINISTRATOR")
                    .setTimestamp(new Date())
                    .setFooter("", bot.user.avatarURL)
                msg.channel.send(Info).catch(function(){console.error("Rejected")});
            }
msg.delete(100);
        }

        if (command.startsWith("ban")) {
            let ToBan = msg.mentions.members.first();
    
            if (ToBan) {
                if (msg.guild.member(msg.author).hasPermission("BAN_MEMBERS" | "ADMINISTRATOR")) {
                    if (msg.guild.me.hasPermission("4" | "8")) {
                        if (ToBan.bannable) {
                            let Reason = args.slice(1).join(" ");
    
                            if (Reason.length == 1) {
                                ToBan.send("You've been banned from: " + msg.guild.name);
                            } else {
                                ToBan.send("You've been banned from: " + msg.guild.name + " for the following reason: " + Reason);
                            }
                            
                               ToBan.ban(7, ).then(e => {
                                    msg.channel.send("**" + ToBan.displayName + "** **_was banned from the server for:_** **" + Reason + "**").catch(function(){console.error("Rejected")});
                               })
                        } else {
                            var Error = new discord.RichEmbed()
                                .setTitle("Error")
                                .setColor("#FF0000")
                                .setDescription("An error has occured.")
                                .addField("This user can't be banned!", "Tell about it with an Server Admin.")
                                .setTimestamp(new Date())
                                .setFooter("", bot.user.avatarURL)
                            msg.channel.send(Error).catch(function(){console.error("Rejected")});
                        }
                    } else {
                        var Error = new discord.RichEmbed()
                            .setTitle("Error")
                            .setColor("#FF0000")
                            .setDescription("An error has occured.")
                            .addField("I need the following permissions to do this:", "BAN_MEMBERS \n**OU**\nADMINISTRATOR")
                            .setTimestamp(new Date())
                            .setFooter("", bot.user.avatarURL)
                        msg.channel.send(Error).catch(function(){console.error("Rejected")});
                    }
                } else {
                    var Error = new discord.RichEmbed()
                        .setTitle("Error")
                        .setColor("#FF0000")
                        .setDescription("An error has occured.")
                        .addField("Necessary permissions to do this:", "BAN_MEMBERS \n**OU**\nADMINISTRATOR")
                        .setTimestamp(new Date())
                        .setFooter("", bot.user.avatarURL)
                    msg.channel.send(Error).catch(function(){console.error("Rejected")});
                }
            } else {
                var Info = new discord.RichEmbed()
                    .setTitle("ban <@user> <Reason>")
                    .setColor("#F47B67")
                    .setDescription("Informations about this command.")
                    .addField("ban <@user> <Reason>", "Ban a user from the server")
                    .addField("Necessary permissions:", "BAN_MEMBERS \n**OU**\nADMINISTRATOR")
                    .setTimestamp(new Date())
                    .setFooter("", bot.user.avatarURL)
                msg.channel.send(Info).catch(function(){console.error("Rejected")});
            }
msg.delete(100);
        }

        if(command.startsWith("unban")) {
            let ToUnban = args[0];
     
            if(ToUnban) {
                if (msg.guild.me.hasPermission("4" | "8")) {
                    if (msg.guild.member(msg.author).hasPermission("BAN_MEMBERS" | "ADMINISTRATOR")) {
                        if(msg.guild.fetchBans().then(e => e.find(TUB => TUB.id === ToUnban))) {
                            msg.guild.unban(ToUnban, "Request by "+msg.author.username).then(e => msg.channel.send("The user was unbanned!")).catch(function(){console.error("Rejected")});
                        }  else {
                            var Error = new discord.RichEmbed()
                                .setTitle("Error")
                                .setColor("#FF0000")
                                .setDescription("An error has occured.")
                                .addField("This user can't be unbanned", "Tell about it with an Server Admin.")
                                .setTimestamp(new Date())
                                .setFooter("", bot.user.avatarURL)
                            msg.channel.send(Error).catch(function(){console.error("Rejected")});
                        }
                    } else {
                        var Error = new discord.RichEmbed()
                            .setTitle("Error")
                            .setColor("#FF0000")
                            .setDescription("An error has occured.")
                            .addField("Necessary permissions to do this command:", "BAN_MEMBERS \n**OU**\nADMINISTRATOR")
                            .setTimestamp(new Date())
                            .setFooter("", bot.user.avatarURL)
                        msg.channel.send(Error).catch(function(){console.error("Rejected")});
                       
                    }
                } else {
                    var Error = new discord.RichEmbed()
                    .setTitle("Error")
                    .setColor("#FF0000")
                    .setDescription("An error has occured.")
                    .addField("I need the following permissions to do this:", "BAN_MEMBERS \n**OU**\nADMINISTRATOR")
                    .setTimestamp(new Date())
                    .setFooter("", bot.user.avatarURL)
                msg.channel.send(Error).catch(function(){console.error("Rejected")});
                }
            } else {
                var Info = new discord.RichEmbed()
                .setTitle("unban <ID>")
                .setColor("#F47B67")
                .setDescription("Informations about this command.")
                .addField("unban <ID>", "Unban a user from the server")
                .addField("Necessary permissions:", "BAN_MEMBERS \n**OU**\nADMINISTRATOR")
                .setTimestamp(new Date())
                .setFooter("", bot.user.avatarURL)
            msg.channel.send(Info).catch(function(){console.error("Rejected")});
            msg.delete(100);
        }

    msg.delete(100);
}});

    bot.login(config.token);
