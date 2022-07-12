import React, { Component, Fragment } from "react";

class ProductsTable extends Component{   
    render() {
        let category = '';
        return (
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                        {this.props.products.map(
                            (product) => {
                                        console.log('category' + category);
                                        if (category !== product.category)
                                        {
                                            category = product.category;
                                            return (
                                            <Fragment>
                                            <tr><td>{product.category}</td></tr>
                                            <tr><td>{product.name}</td><td>{product.price}</td></tr>
                                            </Fragment>
                                            );
                                        }
                                        else
                                        {
                                            return (
                                            <tr><td>{product.name}</td><td>{product.price}</td></tr>
                                            )
                                        }
                                        }
                            )}
                </table>
                
            </div>
        );
    }
}

export default ProductsTable;