import { ClientApplication, MessageEmbed } from "discord.js";
import { t } from "i18next"
import moment from "moment"
import "moment-duration-format"
import { version } from "discord.js";
import os from "os";
export const data = {
    name: t("bot-info.name"),
    description: t("bot-info.description"),
    execute(interaction) {

        const { emoji } = interaction.client
        const bot_ping = Date.now() - interaction.createdTimestamp

        const embed = new MessageEmbed()
            .setAuthor({ name: t("bot-info.info", { lng: interaction.locale }), iconURL: interaction.client.user.avatarURL() })
            .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
            .addFields(
                {
                    name: `${emoji("owner")} ${t("bot-info.developer", { lng: interaction.locale })}`,
                    value:
                        `
                    [Achela#0013](https://discord.com/users/615079401473703956)
                    `,
                    inline: true
                },
                {
                    name: `${emoji("info")} ${t("bot-info.bot_info.name", { lng: interaction.locale })}`,
                    value:
                        `
                    ${t("bot-info.bot_info.bot_name", { lng: interaction.locale })}: **${interaction.client.user.username}**
                    ${t("bot-info.bot_info.bot_version", { lng: interaction.locale })}: **${version}**
                    ${t("bot-info.bot_info.bot_ping", { lng: interaction.locale })}: **${bot_ping} ms**
                    `,
                    inline: true
                },
                {
                    name: `${emoji("data")} ${t("bot-info.bot_data.name", { lng: interaction.locale })}`,
                    value:
                        `
                    ${t("bot-info.bot_data.total_server", { lng: interaction.locale })}: **${interaction.client.guilds.cache.size}**
                    ${t("bot-info.bot_data.total_user", { lng: interaction.locale })}: **${interaction.client.users.cache.size}**
                    ${t("bot-info.bot_data.total_channel", { lng: interaction.locale })}: **${interaction.client.channels.cache.size}**
                    ${t("bot-info.bot_data.total_vc_channel", { lng: interaction.locale })}: **${interaction.client.channels.cache.filter(c => c.type === "GUILD_VOICE").size}**
                    `,
                    inline: true
                },
                {
                    name: `${emoji("edit")} ${t("bot-info.system_info.name", { lng: interaction.locale })}`,
                    value:
                        `
                    ${t("bot-info.system_info.system", { lng: interaction.locale })}: **${process.platform}**
                    ${t("bot-info.system_info.node_version", { lng: interaction.locale })}: **${process.version}**
                    ${t("bot-info.system_info.ram_usage", { lng: interaction.locale })}: **${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB**
                    ${t("bot-info.system_info.cpu_usage", { lng: interaction.locale })}: **${(os.loadavg()[0] * 10).toFixed(2)}%**
                    ${t("bot-info.system_info.processor", { lng: interaction.locale })}: **${os.cpus()[0].model}**
                    `,
                }
            )


        interaction.reply({ embeds: [embed] })
    }
}

export const slash_data = {
    name: data.name,
    description: data.description,
    name_localizations: {
        tr: t("bot-info.name", { lng: "tr" }),
        de: t("bot-info.name", { lng: "de" }),
    },
    description_localizations: {
        tr: t("bot-info.description", { lng: "tr" }),
        de: t("bot-info.description", { lng: "de" }),
    },
    dm_permission: false,
}