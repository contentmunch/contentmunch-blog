import React, {useEffect, useState} from "react";
import {useOktaAuth} from "@okta/okta-react";
import {useHistory} from "react-router-dom";
import {Button, DropdownButton, Icon} from "@contentmunch/muncher-ui";
import './assets/Header.scss';
import {config} from "../../service/LoginConfig";
import {SearchBar} from "./SearchBar";

export const Header: React.FC = () => {
    const {authState, authService} = useOktaAuth();
    const [name, setName] = useState<string>("");
    const login = () => authService.login('/');
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
                                        onClick={() => history.push("/articles/new/edit")}>
                                    <Icon name="edit" weight={1}/> Create
                                </Button>

                                <Button size="small" title="Logout" variant="secondary"
                                        onClick={logout}>
                                    <Icon name="log-out" weight={1}/> Log Out
                                </Button>
                            </div>
                        </DropdownButton> :
                        <Button size="small" title="Login" onClick={login}>
                            <Icon name="log-in" weight={1}/>
                        </Button>
                    }
                </nav>
            </div>
        </header>
    );
}