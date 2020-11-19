import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getArticle, patchArticle} from "../service/ArticleService";
import "./assets/Home.scss";
import {Helmet} from "react-helmet-async";
import {ArticleParam} from "./ArticlePage";
import {Muncher, MuncherSkeleton} from "@contentmunch/muncher";
import {Input} from "@contentmunch/muncher-ui";
import {useOktaAuth} from "@okta/okta-react";
import {Article} from "../data/Article";

export const ArticleEditPage: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [article, setArticle] = useState<Article>({title:"",keywords:""} as Article);
    const {authState} = useOktaAuth();
    const articleParam = useParams<ArticleParam>();
    useEffect(() => {
        getArticle(articleParam.id).then(article => {
            setArticle(article);
            setIsLoading(false);
        });
    }, [articleParam]);

    const saveHandler = () => {
        patchArticle(article, authState.idToken).then(
            article => {
                setArticle(article);
            }
        );
    };
    const deleteHandler = () => {
        console.log("delete the document");
    };
    return (
        <main>
            <Helmet>
                <title>Edit: {article.title}</title>
            </Helmet>
            <section className="container">
                <Input name="title" placeholder="Title" value={article.title}
                       onChange={(e) => {
                           setArticle({...article, title: e.target.value});
                       }}/>
                {
                    isLoading ?
                        <MuncherSkeleton/> :
                        <Muncher content={article.content} setContent={
                            data => {
                                setArticle({...article, content: data});
                            }
                        } saveHandler={saveHandler}
                                 deleteHandler={deleteHandler}/>
                }
                <Input name="keywords" placeholder="Keywords" value={article.keywords}
                       onChange={(e) => {
                           setArticle({...article, keywords: e.target.value});
                       }}/>

            </section>
        </main>
    );
};

