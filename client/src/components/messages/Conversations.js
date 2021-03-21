import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import {
    Card,
    Container,
    Button
} from 'react-bootstrap'
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios'

export default function Conversations(props) {
    const [currentUser, setUserName] = useState(null);
    const convoID = `/conversations/${props.convo._id}`;
    const { user } = useAuth0();
    let convUser;
    props.convo.users.forEach((use) => {
        if (use !== user.sub.split('|')[1]) {
            convUser = use;
        }
    });

    const handleDelete = (event) => {
        event.preventDefault();
        const requestConfig = {
            url: `http://localhost:4000/api/v1/conversations/${props.convo._id}`,
            method: "DELETE",
        };

        axios(requestConfig)
            .then((response) => {
                console.log(`Conversation Deleted ${response.data}`);
            })
            .catch((err) => {
                console.log(`We should handle the error: ${err}`);
            });
    }

    useEffect(() => {
        const config = {
            url: `http://localhost:4000/api/v1/users/${convUser}`,
            method: 'GET',
            headers: { "Content-Type": "application/json" },
        }
        axios(config).then((response) => {
            setUserName(response.data[0].userName);
        }).catch((err) => {
            console.log('error in ViewProductDetail useEffect');
        })
    }, []);

    return (
        <Container>
            <Card className="mb-2">
                <Card.Header >Conversation with {currentUser}</Card.Header>
                <Card.Body>
                    <Button variant="outline-primary" as={Link} to={convoID} >Go To</Button>
                    <Button variant="primary" onClick={handleDelete}>Delete</Button>
                </Card.Body>
            </Card>
        </Container>
    );

}