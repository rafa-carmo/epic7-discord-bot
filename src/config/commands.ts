import { SlashCommandBuilder } from '@discordjs/builders';


const commands = [
    new SlashCommandBuilder()
	.setName('hero')
	.setDescription('Search Hero for name')
	.addStringOption(option => option.setName('name').setDescription('The name of Hero').setRequired(true)).toJSON()
]