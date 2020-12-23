import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import './assets/App.scss';
import {HelmetProvider} from "react-helmet-async";
import {LoginCallback, Security} from "@okta/okta-react";
import {CALLBACK_PATH, config} from "./article/service/LoginConfig";
import {NotFound} from "./NotFound";
import {Header} from "./article/components/header/Header";
import {Footer} from "./article/components/footer/Footer";
import {Home} from "./article/pages/Home";
import {ArticleViewer} from "./article/pages/ArticleViewer";

export const ARTICLE_ROUTE = "/articles";
export const App: React.FC = () => {
    return (
        <HelmetProvider>
            <Router hashType="noslash">

                <Security {...config}>
                    <Header/>
                    <Switch>
                        <Route exact path={CALLBACK_PATH} component={LoginCallback}/>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/:id">
                            <ArticleViewer/>
                        </Route>
                        <Route path="*">
                            <NotFound/>
                        </Route>
                    </Switch>
                    <Footer/>
                </Security>

            </Router>
        </HelmetProvider>
    );
};
