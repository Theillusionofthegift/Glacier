import React from 'react';
import {
    Card,
    Container
} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Conversations(props) {
    const user = props.user
    const list = [];

    const handleUsers = () => {
        for (const key in user) {
           list.push(<Card.Text>{`${key}: ${user[key]}`}</Card.Text>);
        }
        return list;
    }

    return (
        <Container style={{marginTop: "2em"}}>
            <Card className="mb-2">
                <Card.Header >{user.userName}</Card.Header>
                <Card.Body>
                    {handleUsers()}
                    <Card.Link as={Link} to={``}>Update</Card.Link>
                    <Card.Link as={Link} to={``}>Delete</Card.Link>
                </Card.Body>
            </Card>
        </Container>
    );

}