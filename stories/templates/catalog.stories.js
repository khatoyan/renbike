import html from "../../src/project/catalog.html";
import doc from './catalog.doc.mdx';

export default {
    title: "проект/2 - каталог",
    parameters: {
        docs: {
            page: doc,
        },
    },
};

export const catalog  = () => html;
