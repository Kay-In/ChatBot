import dotenv from "dotenv";
import tmi from "tmi.js";

dotenv.config();

const { TWITCH_USERNAME, TWITCH_PASSWORD, NODE_ENV } = process.env;
const { readFileSync, writeFileSync } = require("fs");

const jsonToObject = JSON.parse(readFileSync("./pokedex.json", "utf-8"));


console.log("NODE_ENV", NODE_ENV);

const debug = NODE_ENV === "development";

const client = new tmi.Client({
    options: { debug },
    identity: {
        username: TWITCH_USERNAME,
        password: TWITCH_PASSWORD
    },
    channels: ["#bynody_tv", "#aleksks_"]
});


client.connect().then(() => {
    console.log('Bot is connected to Twitch');
    client.say('bynody_tv', `salut je viens de me connecter`);
    client.say('aleksks_', `salut je viens de me connecter`);
});

client.on('message', (channel, tags, message, viewer) => {
    console.log(`${tags["display-name"]}: ${message}`);
    if (message.toLowerCase() === '!hello') {
        //'user bonjour!'
        client.say(channel, `@${tags.username},bonjour!`);
    } else if (message.toLowerCase() === '!pkmn') {
        client.say(channel, `@${viewer.username},tu es ` + jsonToObject[Math.floor(Math.random() * 809 + 1) - 1].name["french"] + `.`);
    }
})