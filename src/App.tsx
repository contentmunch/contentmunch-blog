import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {LoginCallback, SecureRoute, Security} from '@okta/okta-react';
import './assets/App.scss';
import {HelmetProvider} from "react-helmet-async";
import {Home} from "./pages/Home";
import {NotFound} from "./pages/NotFound";
import {CALLBACK_PATH, config} from "./service/LoginConfig";
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {ArticlePage} from "./pages/ArticlePage";
import {ArticleEditPage} from "./pages/ArticleEditPage";

export const App: React.FC = () => {

    return (
        <HelmetProvider>
            <Router>
                <Security {...config}>
                    <Header/>
                    <Switch>
                        <Route exact path={CALLBACK_PATH} component={LoginCallback}/>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route exact path="/articles/:id">
                            <ArticlePage/>
                        </Route>

                        <SecureRoute exact path="/articles/:id/edit">
                            <ArticleEditPage/>
                        </SecureRoute>

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
