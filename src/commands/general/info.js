import { MessageEmbed } from "discord.js";
import moment from "moment"
import { t } from "i18next"

export const data = {
     name: t("info.name"),
     execute(interaction) {

          const { locale } = interaction

          const target = interaction.targetMember
          const targets = interaction.options._hoistedOptions?.[0]?.member || interaction.member
          const avatar = targets.displayAvatarURL({ dynamic: true, size: 4096 })

          const response = new MessageEmbed()
               .setColor("WHITE")
               .setThumbnail(avatar)
               .addFields(
                    { name: t("username", {ns: "common", lng: locale}), value: target.displayName, inline: true },
                    { name: `**ID**`, value: target.id, inline: true },
                    { name: `Avatar`, value: `[Avatarı görmek için tıkla](${avatar})`, inline: true },
                    { name: t("roles", {ns: "common", lng: locale}), value: `${target.roles.cache.size - 1}`, inline: true },
                    { name: t("createdat", {ns: "common", lng: locale}), value: `${moment(target.user.createdAt).format("DD-MM-YYYY [at] HH:mm")}`, inline: true },
                    { name: t("joinedat", {ns: "common", lng: locale}), value: `${moment(target.joinedAt).format("DD-MM-YYYY [at] HH:mm")}`, inline: true },
               )

          interaction.reply({ embeds: [response] })

     }
}

export const slash_data = {
     name: data.name,
     name_localizations: {
          tr: t("info.name", { lng: "tr" }),
          de: t("info.name", { lng: "de" }),
     },
     type: 2,
     dm_permission: false
}