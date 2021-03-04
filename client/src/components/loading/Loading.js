import React from 'react'
import logo from '../../images/glacier.png'
import { Container, Image, Spinner } from 'react-bootstrap'
import './Loading.css'

export default function Loading() {
    return (
        < Container style={{ position: "absolute", 
                             display: "flex", 
                             flexDirection: "column", 
                             justifyContent: "center", 
                             alignItems: "center",
                             height: '100vh',
                             width: '100vw',
                             top: '0',
                             bottom: '0',
                             right: '0',
                             } }>
            <Container> 
                <Image src={logo} rounded/>
            </Container>
            <Container>
                <Spinner animation="border" variant="info" style={{position: "absolute", left: "150px" }}/>
            </Container>
        </ Container>
    )
}