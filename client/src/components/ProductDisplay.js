import { React } from 'react'
import './ProductDisplay.css';
import 'bootstrap/dist/css/bootstrap.css';
import product from '../images/product.jpg'
import Button from "react-bootstrap/Button";


function ProductDisplay() {
  return (
    <div className="productDisp">
        <span className="price"><img className="product" src={product} alt="productImage" />
          $$$$Price</span>
    </div>
    
  );
}

export default ProductDisplay;