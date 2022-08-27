import { Client } from "discord.js";
import { IntentOptions } from "./config/IntentOptions";
import { onInteraction } from "./events/onInteraction";
import { connectDatabase } from "./structures/mongoose";
import { onReady } from "./events/onReady"
import { bot } from './config/config.json'



(async () => {
  const BOT = new Client({intents: IntentOptions})
  await connectDatabase()
  BOT.on("ready", async () => await onReady(BOT));

  BOT.on(
    "interactionCreate",
    async (interaction) => await onInteraction(interaction)
  );

  await BOT.login(bot.token);
})();