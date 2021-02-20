import React from "react";
import { Container, } from "react-bootstrap";
import Message from "./message";


export default function ProductList(props) {
    const messages = props.messages
    return (
        <Container>
            {messages.map((message,index) => (<Message key={index} message={message.message} user={message.user} />))}
        </Container>
    );
}