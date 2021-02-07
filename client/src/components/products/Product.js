import { React } from 'react'
import './ProductDisplay.css';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card'
import logo from '../../images/product.png'

function Product(props) {
  return (
    <Card style={{ width: '18rem' }} className= "px-2">
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>{props.product.name}  ${props.product.price}</Card.Title>
        <Card.Text>
          {props.product.description}
    </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">Message</Card.Link>
        <Card.Link href={`/product/${props.event.id}`}>Product Description</Card.Link>
      </Card.Body>
    </Card>
  );
  }

  export default Product;