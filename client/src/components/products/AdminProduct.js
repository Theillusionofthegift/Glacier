import React from 'react';
import { Card, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function AdminProduct(props) {
  const product = props.product
  const list = [];

  const handleUsers = () => {
    for (const key in product) {
      list.push(<Card.Text>{`${key}: ${product[key]}`}</Card.Text>);
    }
    return list;
  }

  const handleDelete = () => {
    const config = {
      url: `http://localhost:4000/api/v1/users/${product._id}`,
      method: "DELETE",
    };

    axios(config)
      .then((response) => {
        console.log(`Deleted `)
      })
      .catch((err) => {
        alert("Whoops, something when wrong")
      });
  }

  const handleSold = () => {
    const config = {
      url: `http://localhost:4000/api/v1/users/${product.auth0Id.split('|')[0]}`,
      method: "PUT",
      data: {
        available: false,
      }
    };

    axios(config)
      .then((response) => {
        console.log(`Updated`)
      })
      .catch((err) => {
        alert("Whoops, something when wrong")
      });
  }

  return (
    <Container style={{ marginTop: "2em" }}>
      <Card className="mb-2">
        <Card.Header >{product.userName}</Card.Header>
        <Card.Body>
          {handleUsers()}
          <Card.Link as={Link} to={`/products/update/${product._id}`}>Update</Card.Link>
          <Card.Link as={Button} onClick={handleDelete}>Delete</Card.Link>
          <Card.Link as={Button} onClick={handleSold}>Mark Sold</Card.Link>
        </Card.Body>
      </Card>
    </Container>
  );

}