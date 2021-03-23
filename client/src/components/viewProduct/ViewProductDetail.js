import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ViewProduct from './ViewProduct';
import Loading from '../loading/Loading'

export default function ViewProductDetail() {
  const [viewProduct, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const config = {
      url: `http://localhost:4000/api/v1/products/${id}`,
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    }
    axios(config).then((response) => {
      setProduct(response.data)
    }).catch((err) => {
      console.log('error in ViewProductDetail useEffect');
    })
  }, [id]);


  if (viewProduct) {
    return <ViewProduct product={viewProduct} />
  } else {
    return <Loading />
  }



}