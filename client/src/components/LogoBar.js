import { React } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import logo from '../images/glacier.png'
import {useAuth0} from '@auth0/auth0-react';
import AuthenticationButton from '../components/AuthenticationButton'

export default function LogoBar(props) {
  const { loginWithRedirect } = useAuth0();
  return ( 
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/" className='px-5'>
          <img alt="" src = {logo} width="30" height="30" className="d-inline-block align-top"></img> {' '} Glacier
        </Navbar.Brand>
        <Form inline className="mx-auto">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>

        <Nav className="ml-auto" variant="pills" defaultActiveKey="/home">
          <Nav.Link href="/">Home</Nav.Link>
          <AuthenticationButton />

        </Nav>


      </Navbar>
    </>
  )
}