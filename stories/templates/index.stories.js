import html from "../../src/project/index.html";
import doc from './index.doc.mdx';

export default {
    title: "проект/1 - главная",
    parameters: {
        docs: {
            page: doc,
        },
    },
};

export const index  = () => html;
