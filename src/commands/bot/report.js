import { MessageEmbed } from "discord.js";
import { t } from "i18next"

export const data = {
    name: t("report.name"),
    description: t("report.description"),
    async execute(interaction) {

        const { embed, emoji } = interaction.client

        const bildiri = interaction.options.getString('error')
        const channel = interaction.client.channels.cache.get("979474848034193428")

        interaction.reply({
            embeds: [
                embed(`${emoji("verif")} ${t("report.error_message", { lng: interaction.locale })}`, "INFO")
            ],
            ephemeral: true
        })

        const errors = new MessageEmbed()
            .setColor("FUCHSIA")
            .setAuthor({ name: `${interaction.guild.name} adlı sunucudan bir hata bildirildi!`})
            .setTitle(`${interaction.user.username} Hatayı Bildiren Kişi!`)
            .setDescription(`** ${bildiri} ** `)
            .setFooter({ text: `Hatayı bildiren kişinin ID'si ${interaction.user.id} || Bildirilen Sunucu ${interaction.guild.id}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
            .setTimestamp()
        channel.send({ embeds: [errors] })

    }
}

export const slash_data = {
    name: data.name,
    description: data.description,
    name_localizations: {
        tr: t("report.name", { lng: "tr" }),
        de: t("report.name", { lng: "de" }),
    },
    description_localizations: {
        tr: t("report.description", { lng: "tr" }),
        de: t("report.description", { lng: "de" }),
    },
    options: [
        {
            name: t("report.report_options.name"),
            description: t("report.report_options.description"),
            name_localizations: {
                tr: t("report.report_options.name", { lng: "tr" }),
                de: t("report.report_options.name", { lng: "de" }),
            },
            description_localizations: {
                tr: t("report.report_options.description", { lng: "tr" }),
                de: t("report.report_options.description", { lng: "de" }),
            },
            type: 3,
            required: true
        }
    ]
}

// export const slash_data = new SlashCommandBuilder()
//     .setName(data.name)
//     .setDescription(data.description)
//     .addStringOption(hata =>
//         hata.setName("hata")
//             .setDescription("Bulduğunuz hatayı lütfen detaylı bir şekilde buraya yazınız.")
//             .setRequired(true)
//