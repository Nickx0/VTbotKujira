const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}
client.on('interactionCreate', async interaction => {
	console.log(`${interaction.user.tag} ejecuto el comando ${interaction.commandName} en #${interaction.channel.name}.`);
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'Hubo un error mientras se ejecutaba este comando!', ephemeral: true });
	}
});

client.on('ready',() => {
    console.log(`Logeado como ${client.user.tag}`)
});
client.login(token);