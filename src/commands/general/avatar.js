import { MessageEmbed, MessageActionRow, MessageButton } from "discord.js"
import { t } from "i18next"

export const data = {
	name: t("avatar.name"),
	description: t("avatar.description"),
	async execute(interaction) {

		const target = interaction.guild ? interaction.options.getMember("user") || interaction.member : interaction.options.getUser("user") || interaction.user
		const isGif = target.displayAvatarURL({ dynamic: true }).endsWith(".gif")
		const user = interaction.guild ? target.displayName : target.username

		const responseEmbed = new MessageEmbed()
			.setTitle(`${t("avatar.title", { lng: interaction.locale, user })}`)
			.setColor("RANDOM")
			.setImage(target.displayAvatarURL({ size: 1024}))

		const row = new MessageActionRow()
			.setComponents(
				new MessageButton()
					.setLabel("JPG")
					.setStyle("LINK")
					.setURL(target.displayAvatarURL({ format: "jpg" })),
				new MessageButton()
					.setLabel("PNG")
					.setStyle("LINK")
					.setURL(target.displayAvatarURL({ format: "png" })),
				new MessageButton()
					.setLabel("WEBP")
					.setStyle("LINK")
					.setURL(target.displayAvatarURL({ format: "webp" })),
				new MessageButton()
					.setLabel("GIF")
					.setStyle("LINK")
					.setURL(target.displayAvatarURL({ dynamic: true }))
					.setDisabled(!isGif)
			)

		interaction.reply({ embeds: [responseEmbed], components: [row] })

	}
}

export const slash_data = {
	name: data.name,
	description: data.description,
	name_localizations: {
		tr: t("avatar.name", { lng: "tr" }),
		de: t("avatar.name", { lng: "de" }),
	},
	description_localizations: {
		tr: t("avatar.description", { lng: "tr" }),
		de: t("avatar.description", { lng: "de" }),
	},
	options: [
		{
			name: t("avatar.avatar_options.name"),
			description: t("avatar.avatar_options.description"),
			name_localizations: {
				tr: t("avatar.avatar_options.name", { lng: "tr" }),
				de: t("avatar.avatar_options.name", { lng: "de" }),
			},
			description_localizations: {
				tr: t("avatar.avatar_options.description", { lng: "tr" }),
				de: t("avatar.avatar_options.description", { lng: "de" }),
			},
			type: 6
		}
	]
}

//${interaction.guild ? target.displayName : target.username} Adlı kişinin Avatarı