import React from "react";
import { Container, } from "react-bootstrap";
import Message from "./message";


export default function MessageList(props) {
    const messages = props.messages.messages
    return (
        <Container style={{marginTop: "4em"}}>
            {messages.map((message,index) => <Message key={index} message={message.message} user={message.user} /> )}
        </Container>
    );
}