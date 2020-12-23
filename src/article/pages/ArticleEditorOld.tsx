import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getArticle, patchArticle} from "../service/ArticleService";
import "./assets/ArticleEditor.scss";
import {Helmet} from "react-helmet-async";
import {ArticleParam} from "./ArticleViewer";
import {Muncher, MuncherSkeleton} from "@contentmunch/muncher";
import {Button, Input, Spinner} from "@contentmunch/muncher-ui";
import {useOktaAuth} from "@okta/okta-react";
import {Article} from "../data/Article";
import {Draft} from "../data/Draft";
import {getDraft, isArticleStale, isDraftStale} from "../service/DraftService";
import _ from "lodash";

export const ArticleEditor: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isPublishing, setIsPublishing] = useState(false);
    const [article, setArticle] = useState<Article>({title: "", keywords: ""} as Draft);
    const [lastDraft, setLastDraft] = useState<Draft>({title: "", keywords: ""} as Draft);
    const [draft, setDraft] = useState<Draft>({title: "", keywords: ""} as Draft)
    const {authState} = useOktaAuth();
    const articleParam = useParams<ArticleParam>();
    useEffect(() => {
        Promise.all([getArticle(articleParam.id), getDraft(articleParam.id)])
            .then(data => {
                const currentArticle = data[0];
                const currentDraft = data[1];
                if (isDraftStale(currentDraft, currentArticle)) {
                    setDraft({...currentArticle});
                    setLastDraft({...currentArticle});
                } else {
                    setDraft(currentDraft);
                    setLastDraft(currentDraft);
                }
                setArticle(currentArticle);
                setIsLoading(false);
            });

    }, [articleParam]);

    const changeHandler = (content: string) => {
        //setDraft({...draft, content});
    };
    const publishHandler = () => {
        setIsPublishing(true);
        patchArticle(draft, authState.idToken).then(data => {
            setArticle(data);
            setIsPublishing(false);
        });
    };
    useEffect(() => {
        const interval = setInterval(() => {
            if (!_.isEqual(lastDraft, draft)) {
                // patchDraft(draft, authState.idToken).then(data => {
                //     setLastDraft(data);
                //     setDraft(data);
                // });
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [draft, lastDraft, authState.idToken]);

    return (
        <main>
            <Helmet>
                <title>Edit: {draft.title}</title>
            </Helmet>
            <section className="container">
                <div className="article-editor">
                    {
                        isLoading ? <MuncherSkeleton/> :
                            <Muncher content={draft.content} changeHandler={changeHandler}/>
                    }
                    <Input name="title" placeholder="Title" value={draft.title}
                           onChange={(e) => {
                               setDraft({...draft, title: e.target.value});
                           }}/>
                    <Input name="keywords" placeholder="Keywords" value={draft.keywords}
                           onChange={(e) => {
                               setDraft({...draft, keywords: e.target.value});
                           }}/>
                    <Button disabled={!isArticleStale(draft, article) && !isPublishing} onClick={publishHandler}
                            variant="secondary">Publish {isPublishing ? <Spinner size="tiny"/> : ""}</Button>
                </div>
            </section>
        </main>
    );
};

