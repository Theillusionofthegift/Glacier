import React, { useEffect, useState } from 'react';
import {
  Card,
  Container,
  Button
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {useAuth0} from '@auth0/auth0-react'

export default function Conversations(props) {
  const user = props.user
  const { getAccessTokenSilently } = useAuth0();
  const list = [];

  const handleUsers = () => {
    for (const key in user) {
      list.push(<Card.Text>{`${key}: ${user[key]}`}</Card.Text>);
    }
    return list;
  }

  const handleDelete = async () => {
    const authToken = await getAccessTokenSilently();
    const config = {
      url: `http://localhost:4000/api/v1/users/${user._id}`,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,},
    };

    axios(config)
      .then((response) => {
        console.log(`Deleted ${response}`)
      })
      .catch((err) => {
        console.log("Whoops, something when wrong")
      });
  }

  const handleLock = async () => {
    const authToken = await getAccessTokenSilently();
    let config
    if (user.active) {
      config = {
        url: `http://localhost:4000/api/v1/users/${user.auth0Id.split('|')[0]}`,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,},
          data: {
            active: false,
          }
        }
      } else {
        config = {
          url: `http://localhost:4000/api/v1/users/${user.auth0Id.split('|')[0]}`,
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,},
          data: {
            active: true,
          }
        };
      }


      axios(config)
        .then((response) => {
          console.log(`Updated`)
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
            <Card.Link as={Link} to={`/users/update/`}>Update</Card.Link>
            <Card.Link as={Button} onClick={handleDelete}>Delete</Card.Link>
            <Card.Link as={Button} onClick={handleLock}>Lock</Card.Link>
          </Card.Body>
        </Card>
      </Container>
    );

  }