import html from "../../src/project/settings.html";
import doc from './settings.doc.mdx';

export default {
    title: "проект/4 - настройки",
    parameters: {
        docs: {
            page: doc,
        },
    },
};

export const settings  = () => html;
