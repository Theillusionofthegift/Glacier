import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Product from "./Product";


export default function ProductList(props) {
    const products = props.products
    return (
        <Container>
            <Col >
                <Row >
                    {products.map((product) => (<Product  key={product._id} products={product}/>))}
                </Row>
            </Col>
        </Container>
    );
}