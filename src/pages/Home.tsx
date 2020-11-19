import React, {useEffect, useState} from "react";
import {getRecentArticles} from "../service/ArticleService";
import {Article} from "../data/Article";
import {ArticleCard} from "../components/article/ArticleCard";
import "./assets/Home.scss";

export const Home: React.FC = () => {
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
                        <ArticleCard key={article.id} article={article}/>
                    )
                }
            </section>
        </main>
    );
};