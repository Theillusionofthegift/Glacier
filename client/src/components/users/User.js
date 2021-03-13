import React from 'react';
import {
    Card,
    Container,
    Button
} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default function Conversations(props) {
    const user = props.user
    const list = [];

    const handleUsers = () => {
        for (const key in user) {
           list.push(<Card.Text>{`${key}: ${user[key]}`}</Card.Text>);
        }
        return list;
    }

    const handleDelete = () => {
        const config = {
            url: `http://localhost:4000/api/v1/users/${user._id}`,
            method: "DELETE",
          };
      
          axios(config)
            .then((response) => {
              console.log(`Deleted ${response}`)
            })
            .catch((err) => {
              console.log("Whoops, something when wrong")
            });
    }

    const handleLock = () => {
        const config = {
            url: `http://localhost:4000/api/v1/users/${user._id}`,
            method: "PUT",
            data: {
                active: false,
            }
          };
      
          axios(config)
            .then((response) => {
              console.log(`Updated ${response}`)
            })
            .catch((err) => {
              console.log("Whoops, something when wrong")
            });
    }

    return (
        <Container style={{marginTop: "2em"}}>
            <Card className="mb-2">
                <Card.Header >{user.userName}</Card.Header>
                <Card.Body>
                    {handleUsers()}
                    <Card.Link as={Link} to={``}>Update</Card.Link>
                    <Card.Link as={Button} onClick={handleDelete}>Delete</Card.Link>
                    <Card.Link as={Button} onClick={handleLock}>Lock</Card.Link>
                </Card.Body>
            </Card>
        </Container>
    );

}