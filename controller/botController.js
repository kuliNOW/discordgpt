import { Respon } from "../model/botModel.js";

export const handler = async (message) => {
  if (message.author.bot) return;

  try {
    const pesan = message.content;
    const response = await Respon(pesan);
    const content = response.data.choices[0].message.content;
    await message.reply(content);
  } catch (err) {
    console.error("Error:", err);
    await message.reply("Bot sedang ada trouble");
  }
};