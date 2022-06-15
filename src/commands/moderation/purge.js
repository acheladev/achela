import { time } from "@discordjs/builders"
import { t } from "i18next"

export const data = {
    name: t("purge.name"),
    description: t("purge.description"),
    permission: "MANAGE_MESSAGES",
    cooldown: 20,
    execute(interaction) {

        const { channel } = interaction
        const { embed, emoji } = interaction.client

        const deleteNumber = interaction.options.getInteger("amount")

        channel.bulkDelete(deleteNumber, true)
            .then(messages => {
                return interaction.reply({
                    embeds: [
                        embed(`${emoji("delete")} ${t("purge.deleted", { lng: interaction.locale, amount: messages.size })}`)
                    ]
                })
            })

    }
}

export const slash_data = {
    name: data.name,
    description: data.description,
    name_localizations: {
        tr: t("purge.name", { lng: "tr" }),
        de: t("purge.name", { lng: "de" }),
    },
    description_localizations: {
        tr: t("purge.description", { lng: "tr" }),
        de: t("purge.description", { lng: "de" }),
    },
    options: [
        {
            name: t("purge.deleted_options.name"),
            description: t("purge.deleted_options.description"),
            name_localizations: {
                tr: t("purge.deleted_options.name", { lng: "tr" }),
                de: t("purge.deleted_options.name", { lng: "de" }),
            },
            description_localizations: {
                tr: t("purge.deleted_options.description", { lng: "tr" }),
                de: t("purge.deleted_options.description", { lng: "de" }),
            },
            required: true,
            type: 4,
            min_value: 3,
            max_value: 100
        }
    ],
    dm_permission: false,
    default_member_permissions: 8192
}

// export const slash_data = new SlashCommandBuilder()
//     .setName(data.name)
//     .setDescription(data.description)
//     .addIntegerOption(option =>
//         option.setName("miktar")
//             .setDescription("Silmek istediğiniz mesaj sayısını giriniz.")
//             .setRequired(true)
//             .setMinValue(3)
//             .setMaxValue(100)
//     )