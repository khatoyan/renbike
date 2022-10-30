import html from "../../src/project/booking.html";
import doc from './booking.doc.mdx';

export default {
    title: "проект/3 - бронирование",
    parameters: {
        docs: {
            page: doc,
        },
    },
};

export const booking  = () => html;
