import React from "react";
import {Icon} from "@contentmunch/muncher-ui";
import './assets/Header.scss';
import {SearchBar} from "./SearchBar";

export const Header: React.FC = () => {

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
                </nav>
            </div>
        </header>
    );
}