import React from 'react';
import {Helmet} from "react-helmet-async";

export const NotFound: React.FC = () => {
    return (
        <main>
            <Helmet>
                <title>Resource Not Found</title>

            </Helmet>

            <section className="section-align--center">
                <h2>Uh-oh, this is a 404</h2>
            </section>

        </main>
    );
}