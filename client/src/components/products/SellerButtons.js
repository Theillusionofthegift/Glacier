import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Container } from 'react-bootstrap'
import axios from 'axios'

export default function SellerButtons(props) {

    const handleDelete = (event) => {
        event.preventDefault();
        const requestConfig = {
            url: `http://localhost:4000/api/v1/products/${props.products._id}`,
            method: "DELETE",
        };

        axios(requestConfig)
            .then((response) => {
                console.log(`Product Deleted`);
            })
            .catch((err) => {
                alert(`Whoops something went wrong!`);
            });
    }

    if (props.products.seller) {
        return (
            <Container>
                <Card.Link as={Link} to={'/products/update'}>Update</Card.Link>
                <Card.Link as={Link} onClick={handleDelete}>Delete</Card.Link>
                <hr />
                <Card.Link as={Link} to={`/products/sold/${props.products._id}`}>Mark Sold</Card.Link>
            </Container>
        )
    }
}