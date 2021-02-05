import { React } from 'react'
import ProductDis from './ProductDisplay'
import Row from 'react-bootstrap/Row'
import './ProductGroup.css'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/Container'



function ProductGroup() {
  return (
    <Container>
      <Row>
        <Col xs={5} md={3}>
          <ProductDis />
        </Col>
        <Col xs={5} md={3}>
          <ProductDis />
        </Col>
        <Col xs={5} md={3}>
          <ProductDis />
        </Col>
      </Row>
      <Row>
        <Col xs={5} md={3}>
          <ProductDis />
        </Col>
        <Col xs={5} md={3}>
          <ProductDis />
        </Col>
        <Col xs={5} md={3}>
          <ProductDis />
        </Col>
      </Row>  
    </Container>
      
  );
}

export default ProductGroup;