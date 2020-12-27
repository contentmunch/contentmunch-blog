import React from "react";
import {Article} from "../../data/Article";
import {snippetFrom} from "../../service/ArticleService";
import "./assets/Card.scss";
import moment from "moment";
import {Link} from "react-router-dom";

export const Card: React.FC<CardProps> = ({article}) => {
    return (
        <div className="article-card">
            <h2><Link to={"/" + article.id}>{article.title}</Link></h2>
            <p>{snippetFrom(article.content)}</p>
            <div className="article-card--footer">
                <p>
                    Created {moment(article.createdAt).endOf('day').fromNow()}
                </p>
            </div>
        </div>
    );
};

export interface CardProps {
    article: Article;
}
