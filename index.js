import dotenv from "dotenv";
import { Client, GatewayIntentBits } from "discord.js";
import { handler } from "./controller/botController.js";
import { logger } from "./middleware/botMiddleware.js";

dotenv.config({ 
  path: ".env" 
});

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

logger(client);

client.on("messageCreate", handler);

client.login(process.env.BOT_TOKEN);