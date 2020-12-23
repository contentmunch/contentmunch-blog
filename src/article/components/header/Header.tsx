import React, {useEffect, useState} from "react";
import {useOktaAuth} from "@okta/okta-react";
import {useHistory} from "react-router-dom";
import {Button, DropdownButton, Icon, Spinner} from "@contentmunch/muncher-ui";
import './assets/Header.scss';
import {config} from "../../service/LoginConfig";
import {SearchBar} from "./SearchBar";
import {ARTICLE_ROUTE} from "../../../App";
import {postArticle} from "../../service/ArticleService";

export const Header: React.FC = () => {
    const {authState, authService} = useOktaAuth();
    const [name, setName] = useState<string>("");
    const [isCreatingArticle, setIsCreatingArticle] = useState(false);
    const login = () => authService.login(ARTICLE_ROUTE);
    const redirectUri = `${window.location.origin}`;
    const logout = () => {
        authService.logout('/');
        window.location.href = `${config.issuer}/v1/logout?id_token_hint=${authState.idToken}&post_logout_redirect_uri=${redirectUri}`;
    };
    const [showUserContent, setShowUserContent] = useState(false);
    const history = useHistory();

    useEffect(() => {
        if (authState?.isAuthenticated) {
            authService?.getUser().then((info: any) => {
                setName(info?.name);
            })
        }
    }, [authService, authState]);

    const createArticle = () => {
        setIsCreatingArticle(true);
        postArticle(authState.idToken).then(article => {
            setIsCreatingArticle(false);
            history.push(ARTICLE_ROUTE + "/" + article.id + "/edit");
        });

    };
    return (
        <header className="header">
            <div className="container">
                <nav>
                    <a href="https://www.contentmunch.com" data-title="Contentmunch.com home">
                        <Icon name="muncher" weight={1}/>
                    </a>
                    <div className="header-search">
                        <SearchBar/>
                    </div>
                    {authState.isAuthenticated ?
                        <DropdownButton size="small" title={"Hello " + name + "!"}
                                        element={<Icon name="user" weight={1}/>} showContent={showUserContent}
                                        setShowContent={setShowUserContent}>
                            <div className="header-dropdown--content">
                                <Button size="small" title="Edit" variant="secondary"
                                        onClick={createArticle} disabled={isCreatingArticle}>
                                    <Icon name="edit" weight={1}/> Create&nbsp;{isCreatingArticle ?
                                    <Spinner size="tiny"/> : ""}
                                </Button>
                                <Button size="small" title="Logout" variant="secondary"
                                        onClick={logout}>
                                    <Icon name="log-out" weight={1}/> Log Out
                                </Button>
                            </div>
                        </DropdownButton> :
                        <React.Fragment>

                            <Button size="small" title="Login" onClick={login} disabled={authState.isPending}>
                                <Icon name="log-in" weight={1}/> &nbsp;
                                {authState.isPending ? <Spinner size="tiny"/> : ""}
                            </Button>

                        </React.Fragment>

                    }
                </nav>
            </div>
        </header>
    );
}