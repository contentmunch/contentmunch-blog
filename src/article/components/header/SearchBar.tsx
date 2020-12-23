import React, {useState} from "react";
import {Button, Icon, Input} from "@contentmunch/muncher-ui";
import "./assets/SearchBar.scss";

export const SearchBar: React.FC = () => {
    const [query, setQuery] = useState<string>("");
    const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };
    const handleSearch = () => {
        console.log("search button clicked");
    };
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && query !== "") {
            handleSearch();
        }
    };

    return (
        <div className="search-bar">
            <Input name="query" placeholder="Search articles" onKeyDown={handleKeyDown}
                   onChange={handleQueryChange} icon="type"
            />
            <Button title="Search" variant="secondary" disabled={query === ""}
                    onClick={handleSearch}
            >
                <Icon name="search"/>
            </Button>
        </div>
    );
}