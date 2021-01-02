import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import './assets/App.scss';
import {HelmetProvider} from "react-helmet-async";
import {ArticleHome, ArticleViewer, Footer, Header} from "./article";

export default function App() {
    return (
        <HelmetProvider>
            <Router hashType="noslash">
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
}
