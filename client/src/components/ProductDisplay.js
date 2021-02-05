import { React } from 'react'
import './ProductDisplay.css';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container'
import Figure from 'react-bootstrap/Figure'
import product from '../images/product.png'

function ProductDisplay() {
  return (
    <Container>
      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src={product}
        />
        <Figure.Caption>
         Price
            </Figure.Caption>
      </Figure>
    </Container>
  );
}

export default ProductDisplay;