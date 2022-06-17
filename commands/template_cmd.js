const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
	.setName(NAME)
	.setDescription(DESC),
	async execute(interaction){
		//code goes here
	}
}