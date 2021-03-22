import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Product from "./Product";


export default function ProductList(props) {
    const products = props.products
    return (
        <Container>
            <Col style={{margin: "100px"}}>
                <Row xs={1} md={4} xl={12} className="text-center">
                    {products.map((product) => (<Product  key={product._id} products={product} />))}
                </Row>
            </Col>
        </Container>
    );
}