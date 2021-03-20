import React from 'react';
import {Link} from 'react-router-dom'
import {
    Card,
    Container,
    Button
} from 'react-bootstrap'
import {useAuth0} from '@auth0/auth0-react'
import axios from 'axios'

export default function Conversations(props) {
    const convoID = `/conversations/${props.convo._id}`
    const {user} = useAuth0();
    const convUser = props.convo.users.map((use) => use !== user.sub.split('|')[1] ? use : '')

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

    return (
        <Container>
            <Card className="mb-2">
                <Card.Header >{convUser[0]}</Card.Header>
                <Card.Body>
                    <Button variant="outline-primary" as={Link} to={convoID} >Go To</Button>
                    <Button variant="primary" onClick={handleDelete}>Delete</Button>
                </Card.Body>
            </Card>
        </Container>
    );

}