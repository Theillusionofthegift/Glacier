import { React } from 'react'
import ProductDis from './ProductDisplay'
import './ProductGroup.css'



function ProductGroup() {
  return (
    <div className="prductGroup">
      <ProductDis />
      <ProductDis />
      <ProductDis />
      <ProductDis />
      <ProductDis />
    </div>

  );
}

export default ProductGroup;