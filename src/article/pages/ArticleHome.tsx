import React, {useEffect, useState} from "react";
import {getRecentArticles} from "../service/ArticleService";
import {Article} from "../data/Article";
import {Card} from "../components/card/Card";
import "./assets/Home.scss";

export const ArticleHome: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    useEffect(() => {
        getRecentArticles(5).then(value => {
            setArticles(value);
        });
    }, []);
    return (
        <main>
            <section className="section-home container">
                {
                    articles.map(article =>
                        <Card key={article.id} article={article}/>
                    )
                }
            </section>
        </main>
    );
};