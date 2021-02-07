import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Product from "./Product";

export default function ProductList(props) {
    return (
        <Container>
            <Row>
                {props.products.map((product) => (
                    <Product product={product} />   ))}
            </Row>
        </Container>
    );
}