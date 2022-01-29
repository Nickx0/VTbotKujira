const { SlashCommandBuilder } = require('@discordjs/builders');
const ytch = require('yt-channel-info');
const channelId = 'UC6tSB9TnO0f01OBeo9UEJZA'//''//
var contador;   //Declaro la variable global contador 
ytch.getChannelInfo(channelId).then((response) => {
    contador = (response.subscriberCount)/1000 //Asigno al valor contador subscriberText 
}).catch((err) => {
    console.log(err)
})


module.exports = {
	data: new SlashCommandBuilder()
		.setName('hinasubs')
		.setDescription('Responde con la info de '),
	async execute(interaction) {
		const message = await interaction.reply({ content:`${contador}K de Suscriptores.`,fetchReply: true} );
	},
};