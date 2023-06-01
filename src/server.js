require('dotenv').config();

const tmi = require('tmi.js');
const con = require("./constant.js");
const { readFileSync, writeFileSync } = require("fs");
//pokemon.json=>!pkmn//
const jsonToObject = JSON.parse(readFileSync("./pokedex.json", "utf-8"));


const client = new tmi.Client({
    options: { debug: true, messagesLogLevel: "info" },
    connection: {
        reconnect: true,
        secure: true
    },
    identity: {
        username: `${process.env.T_USERNAME}`,
        password: `${process.env.T_PASSWORD}`
    },
    channels: []
});

client.connect().catch(console.error);

//raid
client.on("raided", (channel, username, viewers) => {
    // Do your stuff.
    if (channel === "") {
        client.say(channel, `Bienvenue à @${username} et son groupe de ${viewers} petites abeilles ! N'hésitez pas à aller jeter un oeil sur sa chaine Twitch.tv/${username} 👀`);
    }
    if (channel === "") {
        client.say(channel, `Bienvenue à @${username} et son groupe de ${viewers} petites cigales ! N'hésitez pas à aller jeter un oeil sur sa chaine Twitch.tv/${username} 👀`);
    }
});

//subgift
client.on("subgift", (channel, username) => {
    if (channel === "") {
        client.say(channel, `Merci @${username} pour toutes les petites abeilles que tu as aidé à faire rentrer dans la Ruche`)
    } else {
        client.say(channel, `merci pour le(s) subgift @${username}!!!!`)
    }
})

//sub
client.on("subscritpion", (channel, username) => {
    if (channel === "") {
        client.say("", `Merci pour ton sub @${username},bienvenue dans la Ruche ,installe toi bien et profites du moment`)
    } else {
        client.say(channel, `Merci pour ton sub @${username}`)
    }
});

///resub
client.on("resub", (channel, username, months) => {
    if (channel === '#bynody_tv') {
        client.say(channel, `Merci @${username} beaucoup pour tes ${months} mois d'abonnements, je suis très contente que tu fasses parti de la Ruche depuis si longtemps`)
    } else {
        client.say(channel, `Merci @${username} beaucoup pour tes ${months} mois d'abonnements!!!`)
    }
})

//twitch-bot-timers//
//cmd
setInterval(() => {
    client.say("#", con.cmd);
}, con.cmdTime * 60 * 1000);

//shop
setInterval(() => {
    client.say("#", con.shop);
}, con.shopTime * 60 * 1000);

//discord
setInterval(() => {
    client.say("#", con.discord);
}, con.discordTime * 60 * 1000);

//twitch-bot-command
client.on('message', (channel, tags, message, self, args) => {
    if (self) return;

    switch (message.toLowerCase()) {
        // albo //
        case '!albo':
            if (channel === "") {
                client.say(channel, `@${tags.username},tu dois savoir que @AlexLenaBo est la plus merveilleuse des abeilles de ce stream`);
            }
            break;

        //bee//
        case '!bee':
            if (channel === "") {
                client.say(channel, `@${tags.username},tu es une 🐝 d'exception <3 <3 <3 !!!`);
            }
            break;

        //cmd//
        case '!cmd':
            if (channel === "") {
                client.say(channel, `Amusez vous avec les commandes du tchat || !albo   !bee    !dice   !fg   !hive   !luna   !lurk   !nolurk   !multi   !pkmn   !quote`);
            };
            break;

        //dice//
        case '!dice':
            client.say(channel, `@${tags.username},tu as fait un ${Math.floor(Math.random() * 6) + 1}`);
            break;

        //fg//
        case '!fg':
            if (channel === "") {
                client.say(channel, ` a encore finie sa partie dans le mucus,ça doit être bon pour la peau vu le temps qu'elle y passe!<3 gneuu gneuu gneuuu gneuuuuuu`);
            };
            if (channel === "") {
                client.say(channel, `@ a encore finie sa partie dans le mucus,ça doit être bon pour la peau vu le temps qu'il y passe!<3 gneuu gneuu gneuuu gneuuuuuu`);
            };
            break;

        //hive//
        case '!hive':
            if (channel === "") {
                client.say(channel, `Bienvenue dans la Ruche de Bynody,installes toi bien confortablement et profites du moment`);
            };
            break;

        //luna//
        case '!luna':
            if (channel === "") {
                client.say(channel, `Retrouvez les bougies enchantées de Luna sur sa boutique www.senteursmagiquesdeluna.com et vous pouvez la suivre sur ses réseaux : Instagram: https://www.instagram.com/luna.de.witchland/ Twitter: https://twitter.com/LunadeWitchland`);
            };
            break;

        //lurk//
        case '!lurk':
            if (channel === "") {
                client.say(channel, `@${tags.username},merci pour ton lurk,tu as le droit d'aller te cacher dans les buissons`);
            };
            if (channel === "") {
                client.say(channel, `@${tags.username},merci pour ton lurk,tu as le droit d'aller te cacher dans la ruche`)
            };
            break;

        //multi//
        case '!multi':
            if (channel === "") {
                client.say(channel, `Si vous souhaitez voir tout les POV, je vous invite à suivre ce lien : https://multitwitch.live/ByNody_Tv/wandaley/aleksks_
            `);
            } if (channel === "") {
                client.say(channel, `Si vous souhaitez voir tout les POV, je vous invite à suivre ce lien :https://multitwitch.live/ByNody_Tv/wandaley/aleksks_`);
            };
            break;

        //nolurk//
        case '!nolurk':
            if (channel === "") {
                client.say(channel, `@${tags.username},merci pour ton non lurk,profite bien du live et n'hesites pas à echanger avec les autres cigales sur le tchat`);
            };
            if (channel === "") {
                client.say(channel, `@${tags.username},merci pour ton non lurk,profite bien du live et n'hesites pas à echanger avec les autres abeilles sur le tchat`)
            };
            break;

        //pkmn//
        case '!pkmn':
            client.say(channel, `@${tags.username},tu es ` + jsonToObject[Math.floor(Math.random() * 809 + 1) - 1].name["french"] + `.`);
            break;

        //town//
        case '!town':
            if (channel === "") {
                client.say("#aleksks_", `En utilisant 1500 Ksksks pour la récompense TOWNSCAPER. Vous pouvez à partir d'un bloc construire un chemin, choisir une couleur dans la palette pour ajouter une maison ou encore annuler un édific. Le but de ce projet est que l'on construise tous ensemble la Ksksks City !`);
            }
            break;

        case '!quote':
            if (channel === "#bynody_tv") {
                client.say(channel, con.quote[Math.floor(Math.random() * con.quote.length)])
            };
    };
})
