import './HomePage.css';
import CatDropDown from '../components/navbar/DropDown'
import ProductProvider from '../components/products/ProductProvider'
import { Container } from 'react-bootstrap'
import MessageIcon from '../components/messages/MessageIcon'
import axios from "axios"
import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react'

function HomePage() {
  const [active, setActive] = useState(false);
  const { isAuthenticated, user } = useAuth0;
  const id = user.sub.split('|')[1]

  useEffect(() => {
    if (isAuthenticated) {
      const config = {
        url: `http://localhost:4000/api/v1/users/${id}`,
        method: 'GET',
      }
      axios(config).then((response) => {
        setActive(response.data.active)
      }).catch((err) => {
        console.log(`error in ProfileView useEffect`);
      })
    } else {

    }
  }, [])

  if(active) {
    return (
      <>
        <CatDropDown />
        <MessageIcon />
        <Container className="mt-5">
          <ProductProvider />
        </Container>
  
      </>
    );
  } else {
    return <div>You are locked out!</div>
  }

}

export default HomePage;