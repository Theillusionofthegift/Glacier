import { React} from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import { Card } from 'react-bootstrap'
import logo from '../../images/product.png'
import SellerButtons from './SellerButtons'

function Product(props) {
  const summary = props.products.description.substr(0,60) + "...";
  if(props.seller){
    return (
      <Card className="mx-3 mt-3">
        <Card.Img src={logo} />
        <Card.Body>
          <Card.Title>{props.products.prodName}  ${props.products.price}</Card.Title>
          <Card.Text>
            {summary}
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Link as={Link} to={`/product/${props.products._id}`}>Product Description</Card.Link>
          <hr />
          <SellerButtons products={props.products} />

        </Card.Body>
      </Card>
    );
  }else {
    return (
      <Card className="mx-3 mt-3">
        <Card.Img src={logo} />
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
}

export default Product;