import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import ViewProduct from './ViewProduct';

export default function ViewProductDetail() {
  const [ viewProduct, setEvent ] = useState(null);

  const { id } = useParams();
  console.log('this is being called before useEffect');
  useEffect(() => {
    console.log('useEffect is being called inside useEffect');
    const config = {
      url: `http://localhost:4000/api/v1/products/${id}`,
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    }
    axios(config).then((response) => {
      setEvent(response.data)
    }).catch((err) => {
      console.log('error in ViewProductDetail useEffect');
    })
  }, []);

  if (viewProduct) {
    return <ViewProduct product = {viewProduct} />
  } else {
    return <div>Loading...</div>
  }

}