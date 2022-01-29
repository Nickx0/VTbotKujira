const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Responde con pong!')
		.addStringOption(option =>
			option.setName('user')
				.setDescription('The input to echo back')
				.setRequired(true)),
	async execute(interaction) {
		await interaction.reply('Pong!');
		await interaction.followUp('Pong again!');
	},
};