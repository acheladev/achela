import { t } from "i18next"

export const data = {
    name: t("v-kick.name"),
    description: t("v-kick.description"),
    async execute(interaction) {

        const member = interaction.options.getMember('user');
        if (!member.voice.channel) {
            return interaction.reply({ content: t("v-kick.member_not_voice", { lng: interaction.locale }) });
        }
        await member.voice.disconnect(`${t("v-kick.kicked", { lng: interaction.locale, by: interaction.user.tag })}`);
        interaction.reply(`${t("v-kick.succes", { lng: interaction.locale, user: member.user.username })}`);

    }
}

export const slash_data = {
    name: data.name,
    description: data.description,
    name_localizations: {
        tr: t("v-kick.name", { lng: "tr" }),
        de: t("v-kick.name", { lng: "de" })
    },
    description_localizations: {
        tr: t("v-kick.description", { lng: "tr" }),
        de: t("v-kick.description", { lng: "de" })
    },
    options: [
        {
            name: t("v-kick.v-kick_options.name"),
            description: t("v-kick.v-kick_options.description"),
            name_localizations: {
                tr: t("v-kick.v-kick_options.name", { lng: "tr" }),
                de: t("v-kick.v-kick_options.name", { lng: "de" })
            },
            description_localizations: {
                tr: t("v-kick.v-kick_options.description", { lng: "tr" }),
                de: t("v-kick.v-kick_options.description", { lng: "de" })
            },
            type: 6,
            required: true
        }
    ],
    dm_permission: false,
    default_member_permissions: 16777216
}

// export const slash_data = new SlashCommandBuilder()
//     .setName(data.name)
//     .setDescription(data.description)
//     .addUserOption(user =>
//         user
//             .setName("kullanıcı")
//             .setDescription("Sesliden atmak istediğiniz kullanıcı")
//             .setRequired(true)
//     )