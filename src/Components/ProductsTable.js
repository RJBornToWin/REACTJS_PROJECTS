import React, { Component } from "react";
import ProductCategory from "./ProductCategory";
import ProductHeader from "./ProductHeader";

class ProductsTable extends Component{
    render() {
        return (
            <div>
                <ProductHeader />
                <ProductCategory /> 
            </div>
        );
    }
}

export default ProductsTable;