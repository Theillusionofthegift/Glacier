import React from 'react'
import { Container } from 'react-bootstrap';
import Product from './AdminProduct';

export default function UserDisplay(props) {
    const prodList = props.prodList
    return (
        <Container>
            {prodList.map((user, index) => <Product key={index} product={user} />)}
        </Container>
    );
}