import { MessageEmbed, MessageActionRow, MessageButton } from "discord.js"
import { t } from "i18next"

export const data = {
    name: t("user.name"),
    description: t("user.description"),
    async execute(interaction) {

        const { locale } = interaction

        const member = interaction.options.getMember('user') || interaction.member;
        const userCreated = Date.now() - member.user.createdTimestamp;
        const joinedTime = Date.now() - member.joinedTimestamp;
        const memberAvatar = member.avatarURL({ dynamic: true }) || member.user.displayAvatarURL({ dynamic: true });
        const embed = new MessageEmbed()
            .setAuthor({ name: member.user.tag, iconURL: member.user.displayAvatarURL({ dynamic: true }) })
            .setThumbnail(memberAvatar)
            .setFooter({ text: member.id, iconURL: member.displayAvatarURL({ dynamic: true }) })
            .setColor('RANDOM')
            .addFields(
                {
                    name: t("user.created", { lng: locale }),
                    value: `\`${member.user.createdAt.toLocaleString()}\`\n**<t:${Math.floor(
                        member.user.createdTimestamp / 1000,
                    )}:R>**`,
                },
                {
                    name: t("user.joined", { lng: locale }),
                    value: `\`${member.joinedAt.toLocaleString()}\`\n**<t:${Math.floor(member.joinedTimestamp / 1000)}:R>**`,
                },
                {
                    name: t("user.user", { lng: locale }),
                    value:
                        member.roles.cache
                            .filter((r) => r.id !== interaction.guild.id)
                            .map((r) => r.toString())
                            .join(', ') || t("user.noroles", { lng: locale }),
                },
                {
                    name: t("user.nickname", { lng: locale }),
                    value: member.nickname || t("user.nonickname", { lng: locale }),
                },
                {
                    name: t("user.bot", { lng: locale }),
                    value: member.user.bot ? '✅' : ':x:',
                },
            );
        if (member.communicationDisabledUntilTimestamp) {
            embed.addField(
                t("user.timeout", { lng: locale }),
                `\`${member.communicationDisabledUntil.toLocaleString()}\`\n**<t:${Math.floor(
                    member.communicationDisabledUntilTimestamp / 1000,
                )}:R>**`,
            );
        }
        const row = new MessageActionRow().addComponents(
            new MessageButton()
                .setStyle('LINK')
                .setURL(member.user.displayAvatarURL({ dynamic: true }))
                .setLabel(t("user.avatar", { lng: locale })),
        );
        interaction.reply({ embeds: [embed], components: [row], ephemeral: true });

    }
}

export const slash_data = {
    name: data.name,
    description: data.description,
    name_localizations: {
        tr: t("user.name", { lng: "tr" }),
        de: t("user.name", { lng: "de" }),
    },
    description_localizations: {
        tr: t("user.description", { lng: "tr" }),
        de: t("user.description", { lng: "de" }),
    },
    options: [
        {
            name: t("user.user_options.name"),
            description: t("user.user_options.description"),
            name_localizations: {
                tr: t("user.user_options.name", { lng: "tr" }),
                de: t("user.user_options.name", { lng: "de" }),
            },
            description_localizations: {
                tr: t("user.user_options.description", { lng: "tr" }),
                de: t("user.user_options.description", { lng: "de" }),
            },
            type: 6

        }
    ],
    dm_permission: false
}

// export const slash_data = new SlashCommandBuilder()
//     .setName(data.name)
//     .setDescription(data.description)
//     .addUserOption(options =>
//         options
//             .setName("kullanıcı")
//             .setDescription("Bilgi almak istediğiniz kullanıcı")
//     )