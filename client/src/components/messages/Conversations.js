import React from 'react';
import Link from 'react-router-dom'
import {
    Card,
    Container,
    Button
} from 'react-bootstrap'

export default function Conversations(props) {
    const convoID = `/converstaions/${props.convo._id}`
    return (
        <Container>
            <Card className="mb-2">
                <Card.Header as="h5">{props.users}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <Button as={Link} to={convoID} >Go To</Button>
                        <Button>Delete</Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );

}