import React from "react";
import {Article} from "../../data/Article";
import {snippetFrom} from "../../service/ArticleService";
import "./assets/Card.scss";
import moment from "moment";
import {Link, useHistory} from "react-router-dom";
import {Button, Icon} from "@contentmunch/muncher-ui";
import {useOktaAuth} from "@okta/okta-react";
import {ARTICLE_ROUTE} from "../../../App";

export const Card: React.FC<CardProps> = ({article}) => {
    const history = useHistory();
    const {authState} = useOktaAuth();
    return (
        <div className="article-card">
            <h2><Link to={ "/" + article.id}>{article.title}</Link></h2>
            <p>{snippetFrom(article.content)}</p>
            <div className="article-card--footer">
                <p>Created {moment(article.createdAt).endOf('day').fromNow()}
                    {(authState?.isAuthenticated) ?
                        <Button size="small"
                                onClick={() => {
                                    history.push( "/" + article.id + "/edit");
                                }}>
                            <Icon name="edit"/>
                        </Button> : ""
                    }
                </p>
            </div>
        </div>
    );
};

export interface CardProps {
    article: Article;
}
