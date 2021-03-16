import { React } from 'react'
import {Navbar, Image} from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'
import AuthenticationButton from '../../components/auth/AuthenticationButton'
import logo from '../../images/glacier.png'
import { useAuth0 } from "@auth0/auth0-react";

export default function LogoBar(props) {
  const { isAuthenticated } = useAuth0();
  return ( 
    <>
      <Navbar bg="primary" variant="dark" style={{position: "fixed", top: "0",width: "100%", zIndex:100}}>
        <Navbar.Brand as={Link} to="/" className='px-5'>
          <Image alt="" src = {logo} width="30" height="30" className="d-inline-block align-top" roundedCircle style={{fontSize: 10}}/> {' '} Glacier
        </Navbar.Brand>


        <Nav className="ml-auto" variant="pills" defaultActiveKey="/home">
          <Nav.Link as={Link} to="/" style={{fontSize: 18}}>Home</Nav.Link>
          { isAuthenticated ? <Nav.Link as={Link} to="/sell" style={{fontSize: 18}}>Sell</Nav.Link> : ''}
          { isAuthenticated ? <Nav.Link as={Link} to="/profile" style={{fontSize: 18}}>Profile</Nav.Link> : '' }
          <AuthenticationButton />
        </Nav>


      </Navbar>
    </>
  )
}