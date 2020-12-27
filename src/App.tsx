import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import './assets/App.scss';
import {HelmetProvider} from "react-helmet-async";
import {Header} from "./article/components/header/Header";
import {Footer} from "./article/components/footer/Footer";
import {ArticleHome} from "./article/pages/ArticleHome";
import {ArticleViewer} from "./article/pages/ArticleViewer";

export const App: React.FC = () => {
    return (
        <HelmetProvider>
            <Router hashType="noslash" >
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <ArticleHome/>
                    </Route>
                    <Route exact path="/:id">
                        <ArticleViewer/>
                    </Route>
                </Switch>
                <Footer/>
            </Router>
        </HelmetProvider>
    );
};
