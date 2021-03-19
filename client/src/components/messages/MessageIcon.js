import React from 'react'
import { Container, Image } from 'react-bootstrap'
import messageBubble from "../../images/messagebubble.png"
import { useAuth0 } from '@auth0/auth0-react'

export default function MessageIcon() {
    const { isAuthenticated } = useAuth0();

    if (isAuthenticated) {
        return (
            <Container style={{ position: "fixed", right: "-900px", bottom: "0", paddingBottom: "10px" }}>
                <a href="/conversations/all"><Image src={messageBubble} alt='messages' roundedCircle /></a>
            </Container>
        );
    } else {
        return <></>
    }
}