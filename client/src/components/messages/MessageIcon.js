import React from 'react'
import { Container, Image } from 'react-bootstrap'
import messageBubble from "../../images/messagebubble.png"

export default function MessageIcon() {
    return (
        <Container style={{position: "fixed", right: "-900px", bottom:"0", paddingBottom: "10px"}}>
                <a href="/conversations/all"><Image src={messageBubble} alt='messages' roundedCircle/></a>
        </Container>
    );
}