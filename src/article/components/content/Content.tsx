import React from "react";
import ReactHtmlParser from 'react-html-parser';
import "./assets/Content.scss";

export const Content: React.FC<ContentProps> = ({content}) => {
    return (
        <div className="article-content">
            {content ? ReactHtmlParser(content) : ""}
        </div>
    );
}

export interface ContentProps {
    content?: string;
}