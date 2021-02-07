import { React } from 'react'
import './ProductDisplay.css';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card'
import logo from '../../images/product.png'
import './Product-style.css'

function Product(props) {
  return (

    <Card style={{ width: '18rem' }} className= ".card-columns">
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>{props.products.name}  ${props.products.price}</Card.Title>
        <Card.Text>
          {props.products.description}
    </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">Message</Card.Link>
        <Card.Link href={`/product/${props.products.id}`}>Product Description</Card.Link>
      </Card.Body>
    </Card>

  );
  }

  export default Product;