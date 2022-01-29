const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Responde con tu info!'),
	async execute(interaction) {
		const message = await interaction.reply({ content:`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`,fetchReply: true} );
		message.react('😄');
	},
};