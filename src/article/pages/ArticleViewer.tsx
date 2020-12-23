import React, {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import {getArticle} from "../service/ArticleService";
import {Article} from "../data/Article";
import "./assets/Home.scss";
import {Content} from "../components/content/Content";
import moment from "moment";
import {Helmet} from "react-helmet-async";
import {ARTICLE_ROUTE} from "../../App";

export const ArticleViewer: React.FC = () => {
    const [article, setArticle] = useState<Article>();
    const articleParam = useParams<ArticleParam>();
    const history = useHistory();
    useEffect(() => {
        getArticle(articleParam.id).then(value => {
            setArticle(value);
        }).catch((() => {
            history.push(ARTICLE_ROUTE + "/not-found");
        }));
    }, [articleParam, history]);
    return (
        <main>
            <Helmet>
                <title>{article?.title}</title>
            </Helmet>
            <section className="section-home container">
                <h2>{article?.title}</h2>
                <Content content={article?.content}/>
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