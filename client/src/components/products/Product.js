import { React } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import { Card } from 'react-bootstrap'
import SellerButtons from './SellerButtons'
import placeHolder from '../../images/product.png'


function Product(props) {
  let prodImage;
  if (props.products.images[0] !== undefined) {
    prodImage = `http://localhost:4000/${props.products.images[0]}`;
  } else {
    prodImage = placeHolder;
  }
  
  const summary = props.products.description.substr(0, 60) + "...";
  if (props.seller) {
    return (
      <Card className="mx-3 mt-3">
        <Card.Img src={prodImage} style={{ height:"200px"}}/>
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
  } else {
    return (
      <Card className="mx-3 mt-3">
        <Card.Img src={prodImage} style={{ height:"200px"}} />
        <Card.Body>
          <Card.Title>{props.products.prodName}  ${props.products.price}</Card.Title>
          <Card.Text>
            {summary}
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Link as={Link} to={`/product/${props.products._id}`}>Product Description</Card.Link>
        </Card.Body>
      </Card>


    );
  }
}

export default Product;