import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getArticle} from "../service/ArticleService";
import {Article} from "../data/Article";
import "./assets/Home.scss";
import {ArticleContent} from "../components/article/ArticleContent";
import moment from "moment";
import {Helmet} from "react-helmet-async";

export const ArticlePage: React.FC = () => {
    const [article, setArticle] = useState<Article>();
    const articleParam = useParams<ArticleParam>();
    useEffect(() => {
        getArticle(articleParam.id).then(value => {
            setArticle(value);
        });
    }, [articleParam]);
    return (
        <main>
            <Helmet>
                <title>{article?.title}</title>
            </Helmet>
            <section className="section-home container">
                <h2>{article?.title}</h2>
                <ArticleContent content={article?.content}/>
                <p>keywords: {article?.keywords}</p>
                <p>status: {article?.status}</p>
                <p>Created {moment(article?.createdAt).endOf('day').fromNow()}</p>
                <p>LastModified {moment(article?.lastModifiedAt).endOf('day').fromNow()}</p>

            </section>
        </main>
    );
};

export interface ArticleParam {
    id: string
}