import React from "react";
import SearchBar from "./SeachBar";

function SearcheableProductData(props)
{
    return (
        <div className={props.className}>
            <SearchBar />
        </div>
        
    );
}

export default SearcheableProductData;