import React from "react";
import "./SearchBar.css"

function SearchBar(props)
{
    return (
        <div className="Search-bar">
            <input placeholder="search keyword" maxLength="100" type="text"/>
            <br />
            <label>
            <input type="checkbox"></input>
            show only items in stock
            </label>
        </div>
    );
}

export default SearchBar;