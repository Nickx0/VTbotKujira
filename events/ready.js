module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Logeado como ${client.user.tag}`)
	},
};