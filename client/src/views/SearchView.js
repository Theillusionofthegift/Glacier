import React, {useState, useEffect}from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ProductList from '../components/products/ProductList'

export default function SearchView(){
  const [searchProducts, setSearchProducts] = useState(null);
  const { params } = useParams()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const config = {
      url: `http://localhost:4000/api/v1/products/?search=${params.search}`,
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    }
    axios(config).then((response) => {
        setSearchProducts(response.data)
        setLoading(false)
    }).catch((err) => {
      console.log('error in ViewProductDetail useEffect');
    })
  }, [params.search]);

  if(loading) {
    return <div>Loading...</div>
  } else {
      return (<ProductList products={searchProducts} /> )
  }
}