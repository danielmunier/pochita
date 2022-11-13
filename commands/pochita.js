const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('pochita')
    .setDescription("DANDANDANDANNNNNNNNN"),
    async execute(interaction) {
        await interaction.reply("DANDANDANDANNNNNNNNN!")
    }
}

