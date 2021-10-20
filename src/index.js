import { config } from "dotenv";
import { Client, Intents } from "discord.js";
import { chemsificator } from "./utils.js";
import { PREFIX } from "./constants.js"

config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  const [prefix, ...message] = msg.content.split(" ");
  const joinedMessage = message.join(" ")
  if (!msg.author.bot) {
    if (prefix === PREFIX) {
      const user = msg.mentions.users.first();
      if (user) {
        msg.reply(chemsificator(user.username))
      } else {
        msg.reply(chemsificator(joinedMessage));
      }
    }
  }
});

client.login(process.env.TOKEN)