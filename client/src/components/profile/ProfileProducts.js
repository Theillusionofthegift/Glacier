import React, { useState, useEffect}  from 'react'
import ProductList from '../products/ProductList'
import axios from 'axios'
import { Container } from 'react-bootstrap';

export default function ProfileProducts(props) {
    const [products, setProducts ] = useState(null);
    const [loading, setLodading ] = useState(true);

    useEffect(() => {
        const config = {
          url: `http://localhost:4000/api/v1/products/?seller=${props.user.auth0Id}`,
          method: 'GET',
          headers: { "Content-Type": "application/json" },
        }
        axios(config).then((response) => {
            setProducts(response.data)
            setLodading(false);
        }).catch((err) => {
          console.log('error in ViewProductDetail useEffect');
        })
      }, [props.user.auth0Id]);



    if (loading){
        return <div></div>
    }  else {
        return (
            <Container className="mx-auto">
              <br />
              <h1>Items you're selling</h1>
              <ProductList products={products} /> 
            </Container>
    );
    }

}

