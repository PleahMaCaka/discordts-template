import { CommandInteraction } from "discord.js";
import { Discord, Slash } from "discordx";

@Discord()
export class Example {

	@Slash("example")
	private async exampleSlash(interaction: CommandInteraction) {
		await interaction.reply("hello!")
	}

}