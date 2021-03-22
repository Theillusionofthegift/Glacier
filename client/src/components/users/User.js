import React, { useEffect, useState } from 'react';
import {
  Card,
  Container,
  Button
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react'

export default function Conversations(props) {
  const otherUser = props.user
  const { user } = useAuth0();
  const list = [];
  const [convoPath, setConvoPath] = useState('');
  const id = user.sub.split('|')[1];

  useEffect(() => {
    const config = {
      url: `http://localhost:4000/api/v1/conversations/?seller=${otherUser}&buyer=${id[1]}`,
      method: 'GET',
    }
    axios(config).then((response) => {
      setConvoPath(response.data._id)
    }).catch((err) => {
      console.log('error in ViewProductDetail useEffect');
    })
  }, [])

  const handleUsers = () => {
    for (const key in otherUser) {
      list.push(<Card.Text>{`${key}: ${otherUser[key]}`}</Card.Text>);
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
      url: `http://localhost:4000/api/v1/users/${user.auth0Id.split('|')[0]}`,
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
    <Container style={{ marginTop: "2em" }}>
      <Card className="mb-2">
        <Card.Header >{user.userName}</Card.Header>
        <Card.Body>
          {handleUsers()}
          <Button variant="outline-primary" className="mr-3"as={Link} to={`/users/update/`}>Update</Button>
          <Card.Link as={Button} onClick={handleDelete}>Delete</Card.Link>
          <Card.Link as={Button} onClick={handleLock}>Lock</Card.Link>
          <Button variant="outline-primary" className="ml-3"as={Link} to={`/conversations/${convoPath}`}>Message</Button>
        </Card.Body>
      </Card>
    </Container>
  );

}