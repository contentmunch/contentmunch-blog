import {api} from "./Api";
import {Article} from "../data/Article";

export const addEllipsis = (text: string, size?: number) => {
    if (!size) {
        size = 150;
    }
    return text.length > size ? text.substring(0, size) + "..." : text;
};

export const snippetFrom = (content: string): string => {
    const document = new DOMParser().parseFromString("<div>" + content + "</div>", 'text/html');
    let snippet: string = '';
    for (let i = 0; i < document.documentElement.childNodes.length; i++) {

        const children = document.documentElement.childNodes[i];
        if (children.textContent && children.textContent !== '') {
            snippet = children.textContent;
            break;
        }
    }
    return addEllipsis(snippet);

};
export const getRecentArticles = (size: number): Promise<Article[]> => {
    return api.get("articles?projection=withId&sort=createdAt,desc&size=" + size)
        .then(response => response.data._embedded.articles);
}

export const getArticle = (id: string): Promise<Article> => {
    return api.get("articles/" + id + "?projection=withId")
        .then(response => response.data);
}