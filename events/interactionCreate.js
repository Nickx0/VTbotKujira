module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		console.log(`${interaction.user.tag} ejecuto el comando ${interaction.commandName} en #${interaction.channel.name}.`);
	},
};