import React from 'react'
import { Container, Image } from 'react-bootstrap'

export default function MessageIcon() {
    return (
        <Container >
            <a href="/conversations/all">
                <Image src='../../images/messages.jpg' />
            </a>
        </Container>
    );
}