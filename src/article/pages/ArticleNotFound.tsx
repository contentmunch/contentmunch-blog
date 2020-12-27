import React from 'react';
import {Helmet} from "react-helmet-async";

export const ArticleNotFound: React.FC = () => {
    return (
        <main>
            <Helmet>
                <title>Resource Not Found</title>
            </Helmet>
            <section className="section-align--center">
                <h2>Uh-oh, article not found!</h2>
            </section>
        </main>
    );
}