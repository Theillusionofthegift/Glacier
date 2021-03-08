import { React, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import { Card } from 'react-bootstrap'
import logo from '../../images/product.png'
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios'
import './Product-style.css'
import SellerButtons from './SellerButtons';

function Product(props) {
  return (

    <Card style={{ width: '18rem' }} className="mx-3">
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>{props.products.prodName}  ${props.products.price}</Card.Title>
        <Card.Text>
          {props.products.description}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link as={Link} to={`/product/${props.products._id}`}>Product Description</Card.Link>
        {/* user ? <SellerButtons products={props.products} /> : "" */}

      </Card.Body>
    </Card>


  );
}

export default Product;