import React from "react";
import { Container, } from "react-bootstrap";
import Message from "./message";


export default function ProductList(props) {
    const messages = props.messages
    return (
        <Container>
            {messages.map((message) => (<Message key={message.id} message={message} />))}
        </Container>
    );
}