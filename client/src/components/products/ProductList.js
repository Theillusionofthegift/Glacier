import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Product from "./Product";


export default function ProductList(props) {
    const products = props.products
    return (
        <CardDeck className="px-5"> 
                {products.map((product) => (<Product key={product.id} products={product} />))}
        </CardDeck> 
    );
}