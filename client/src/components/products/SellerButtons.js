import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios'

export default function SellerButtons(props) {
    const user = useAuth0();
    const id = user.sub.spilt('|');

    const handleDelete = (event) => {
        event.preventDefault();
        const requestConfig = {
            url: `http://localhost:4000/api/v1/products/${props.products._id}`,
            method: "DELETE",
        };
    
        axios(requestConfig)
            .then((response) => {
                console.log(`Product Deleted ${response.data}`);
            })
            .catch((err) => {
                console.log(`We should handle the error: ${err}`);
            });
    }

    if (id[1] === props.product.seller) {
        return (
            <>
                <Card.Link as={Link} to={'/products/update'}>Update</Card.Link>
                <Card.Link as={Button} onClick={handleDelete}>Delete</Card.Link>
            </>
        )
    }
}