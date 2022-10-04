import dotenv from "dotenv";
import tmi from "tmi.js";

dotenv.config();

const { TWITCH_USERNAME, TWITCH_PASSWORD, NODE_ENV } = process.env;

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

client.connect();
client.on('message', (channel, tags, message, self) => {
    if (self) return;

    console.log(`${tags['display-name']}: ${message}`);

    if (message.toLowerCase() === '!hello') {
        //'user bonjour!'
        client.say(channel, `@${tags.username},bonjour!`);
    }
})