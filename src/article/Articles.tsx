import React from 'react';
import {BrowserRouter as Router, Route, Switch, useRouteMatch} from 'react-router-dom';
import {SecureRoute} from '@okta/okta-react';
import '../assets/App.scss';
import {HelmetProvider} from "react-helmet-async";
import {Home} from "./pages/Home";
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {ArticleViewer} from "./pages/ArticleViewer";
import {ArticleEditor} from "./pages/ArticleEditor";
import {NotFound} from "./pages/NotFound";

export const Articles: React.FC = () => {
    const {path} = useRouteMatch();
    return (
        <HelmetProvider>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path={path}>
                        <Home/>
                    </Route>
                    <Route exact path={`${path}/not-found`} >
                        <NotFound/>
                    </Route>
                    <Route exact path={`${path}/:id`}>
                        <ArticleViewer/>
                    </Route>

                    <SecureRoute exact path={`${path}/:id/edit`}>
                        <ArticleEditor/>
                    </SecureRoute>
                </Switch>
                <Footer/>

            </Router>
        </HelmetProvider>
    );
};
