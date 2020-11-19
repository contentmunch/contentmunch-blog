import React from "react";
import ReactHtmlParser from 'react-html-parser';
import "./assets/ArticleContent.scss";

export const ArticleContent: React.FC<ArticleContentProps> = ({content}) => {
    return (
        <div className="article-content">
            {content ? ReactHtmlParser(content) : ""}
        </div>
    );
}

export interface ArticleContentProps {
    content?: string;
}