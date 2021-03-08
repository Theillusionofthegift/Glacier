import { React} from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import { Card } from 'react-bootstrap'
import logo from '../../images/product.png'
import './Product-style.css'

function Product(props) {
  const summary = props.products.description.substr(0,60) + "...";
  return (
    <Card style={{ width: '18rem' }} className="mx-3">
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>{props.products.prodName}  ${props.products.price}</Card.Title>
        <Card.Text>
          {summary}
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