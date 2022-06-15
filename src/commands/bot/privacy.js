import { MessageEmbed } from "discord.js";
import { t } from "i18next"

export const data = {
    name: t("privacy.name"),
    description: t("privacy.description"),
    cooldown: 30,
    execute(interaction) {

        const embed = new MessageEmbed()
            .setTitle(`${t("privacy.e_title", { lng: interaction.locale })}`)
            .setDescription(`${t("privacy.e_description", { lng: interaction.locale })}`)
            .addFields(
                {
                    name: `${t("privacy.fields.which_data", { lng: interaction.locale })}`,
                    value:
                        `
                        ${t("privacy.fields.which_data_val", { lng: interaction.locale })}
                        `,
                },
                {
                    name: `${t("privacy.fields.request_data", { lng: interaction.locale })}`,
                    value:
                        `
                        ${t("privacy.fields.request_data_val", { lng: interaction.locale })}
                        `,
                },
                {
                    name: `${t("privacy.fields.using_data", { lng: interaction.locale })}`,
                    value:
                        `
                        ${t("privacy.fields.using_data_val", { lng: interaction.locale })}
                        `,
                },
                {
                    name: `${t("privacy.fields.data_storage", { lng: interaction.locale })}`,
                    value:
                        `
                        ${t("privacy.fields.data_storage_val", { lng: interaction.locale })}
                        `,
                },
                {
                    name: `${t("privacy.fields.data_sharing", { lng: interaction.locale })}`,
                    value:
                        `
                       ${t("privacy.fields.data_sharing_val", { lng: interaction.locale })}
                       `,
                },
                {
                    name: `${t("privacy.fields.another_concern", { lng: interaction.locale })}`,
                    value:
                        `
                        ${t("privacy.fields.another_concern_val", { lng: interaction.locale })}
                        `,
                }
            )
            .setThumbnail(interaction.client.user.avatarURL())
            .setColor("GREEN")

        interaction.reply({ embeds: [embed] });

    }
}

export const slash_data = {
    name: data.name,
    description: data.description,
    name_localizations: {
        tr: t("privacy.name", { lng: "tr" }),
        de: t("privacy.name", { lng: "de" }),
    },
    description_localizations: {
        tr: t("privacy.description", { lng: "tr" }),
        de: t("privacy.description", { lng: "de" }),
    }
}