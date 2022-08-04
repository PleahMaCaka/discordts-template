import type { ArgsOf } from "discordx"
import { Client, Discord, On } from "discordx"

@Discord()
export class InteractionHandler {

	@On("interactionCreate")
	private async interactionHandler(
		[interaction]: ArgsOf<"interactionCreate">,
		client: Client
	) {
		await client.executeInteraction(interaction)
	}

}