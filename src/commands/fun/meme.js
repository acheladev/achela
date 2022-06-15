import { t } from "i18next"
import { MessageActionRow, MessageButton } from "discord.js"
import axios from "axios";

export const data = {
    name: t("meme.name"),
    description: t("meme.description"),
    cooldown: 20,
    async execute(interaction) {

        await interaction.deferReply();
        const url = 'https://meme-api.herokuapp.com/gimme';
        const req = await axios.get(url);
        const data = req.data;
        const row = new MessageActionRow().addComponents(
            new MessageButton().setLabel('Meme Link').setStyle('LINK').setURL(data.postLink),
        );
        interaction.editReply({ files: [data.url], components: [row] });

    }
}

export const slash_data = {
    name: data.name,
    description: data.description,
    name_localizations: {
        tr: t("meme.name", { lng: "tr" }),
        de: t("meme.name", { lng: "de" }),
   },
   description_localizations: {
        tr: t("meme.description", { lng: "tr" }),
        de: t("meme.description", { lng: "de" }),
   }
}