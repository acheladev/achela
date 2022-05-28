import { MessageEmbed, MessageActionRow, MessageButton } from "discord.js"
import { t } from "i18next"

export const data = {
    name: t("invite.name"),
    description: t("invite.description"),
    async execute(interaction) {

        const linkRow = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setURL("https://discord.com/api/oauth2/authorize?client_id=950403923687133254&permissions=8&scope=bot%20applications.commands")
                    .setLabel(`${t("invite.label", { lng: interaction.locale })}`)
                    .setStyle("LINK")
                    .setEmoji("969615216545505302")

            );


        const butons = new MessageEmbed()
            .setColor("BLURPLE")
            .setTitle(`${t("invite.embed.title", {lng: interaction.locale})}`)
                .setDescription(`${t("invite.embed.description", { lng: interaction.locale })}`)

        return interaction.reply({ embeds: [butons], components: [linkRow] })

    }
}

export const slash_data = {
    name: data.name,
    description: data.description,
    name_localizations: {
        tr: t("invite.name", { lng: "tr" }),
        de: t("invite.name", { lng: "de" }),
    },
    description_localizations: {
        tr: t("invite.description", { lng: "tr" }),
        de: t("invite.description", { lng: "de" }),
    },
}