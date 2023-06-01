//import message.json
const msg=require("./message.json");

//Timer-Variables
const cmd=msg.timedMessages.cmd;
const cmdTime=msg.timedMessages.cmdTime;
const shop=msg.timedMessages.shop;
const shopTime=msg.timedMessages.shopTime;
const discord=msg.timedMessages.discord;
const discordTime=msg.timedMessages.discordTime;
const quote=msg.quoteMessage.quote;


///Exports///
module.exports={
    cmd,
    cmdTime,
    shop,
    shopTime,
    discord,
    discordTime,
    quote
}