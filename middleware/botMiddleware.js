export const logger = (client) => {
  client.on("ready", () => {
    console.log(`Login sebagai ${client.user.tag}!`);
  });
};