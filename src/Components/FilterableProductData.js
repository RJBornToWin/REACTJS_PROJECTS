import React from "react";
import SearchBar from "./SeachBar";
import ProductsTable from "./ProductsTable";

function FilterableProductData(props)
{
    console.log("props.products");
    console.log(props.products);

    return (
        <div className={props.className}>
            <SearchBar />
            <ProductsTable products={props.products}/>
        </div>
        
    );
}

export default FilterableProductData;