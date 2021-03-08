import React from 'react'
import { Container, Image } from 'react-bootstrap'

export default function MessageIcon() {
    return (
        <Container style={{position: "fixed", right: "-980px", bottom:"0", paddingBottom: "10px"}}>
                <Image src="../../images/messagebubble.png" alt='messages' roundedCircle/>
        </Container>
    );
}