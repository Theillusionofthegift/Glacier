import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import ViewProduct from './ViewProduct';

export default function ViewProductDetail() {
  const [ viewProduct, setViewProduct ] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    const config = {
      url: `http://localhost:4000/api/v1/products/${id}`,
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    }
    axios(config).then((response) => {
      setViewProduct(response.data)
    }).catch((err) => {
      console.log('error in ViewProductDetail useEffect');
    })
  },);

  return <ViewProduct product = {viewProduct} />
}