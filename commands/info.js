const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')


module.exports = {
    data: new SlashCommandBuilder()
    .setName('info')
    .setDescription('Provides information about the server'),
 

    async execute(interaction) {
        await interaction.reply({content: `This server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members `, ephemeral: true});
    }
}