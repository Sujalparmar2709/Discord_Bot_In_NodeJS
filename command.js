require("dotenv").config();
const { REST, Routes } = require("discord.js");
const command = [
    {
        name: 'create',
        description: "Create a new short URL",
    },
];



const rest = new REST(
    {version: "10"})
    .setToken(process.env.DISCORD_TOKEN);
(async () => {
    try {
        console.log('Started refreshing application. ');

        await rest.put(Routes.applicationCommands('1523643332037705858'), { body:command });

        console.log("Successfully reloaded application (/) command. ");
    } catch (error) {
        console.error(error);
    }
})();