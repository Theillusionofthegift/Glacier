import React from 'react';
import {Link} from 'react-router-dom'
import {
    Card,
    Container,
    Button
} from 'react-bootstrap'
import {useAuth0} from '@auth0/auth0-react'

export default function Conversations(props) {
    const convoID = `/conversations/${props.convo._id}`
    const {user} = useAuth0();
    const convUser = props.convo.users.filter(use => use !== user.sub.split('|')[1])
    return (
        <Container>
            <Card className="mb-2">
                <Card.Header >{convUser}</Card.Header>
                <Card.Body>
                    <Button variant="outline-primary" as={Link} to={convoID} >Go To</Button>
                    <Button>Delete</Button>
                </Card.Body>
            </Card>
        </Container>
    );

}