import React from "react";
import SearchBar from "./SeachBar";
import ProductsTable from "./ProductsTable";

function FilterableProductData(props)
{
    return (
        <div className={props.className}>
            <SearchBar />
            <ProductsTable products={props.products}/>
        </div>
        
    );
}

export default FilterableProductData;