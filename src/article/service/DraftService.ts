import {api, authHeader} from "./Api";
import {Draft} from "../data/Draft";
import {Article} from "../data/Article";
import moment from "moment";


export const getDraft = (id: string): Promise<Draft> => {
    return api.get("drafts/" + id + "?projection=withId")
        .then(response => response.data);
}
export const patchDraft = (draft: Draft, accessToken: string) => {
    api.patch("drafts/" + draft.id + "?projection=withId", {...draft}, authHeader(accessToken));
}

export const isDraftStale = (draft: Draft, article: Article) => {
    return moment(article.lastModifiedAt) > moment(draft.lastModifiedAt);
}

export const isArticleStale = (draft: Draft, article: Article) => {
    return moment(article.lastModifiedAt) < moment(draft.lastModifiedAt);
}