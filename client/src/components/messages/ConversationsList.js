import React from "react";
import { Container, } from "react-bootstrap";
import Conversations from "./message";


export default function ConversationsList(props) {
    const conversations = props.convo
    return (
        <Container>
            {conversations.map((convo,index) => (<Conversations key={index} convo={convo} />))}
        </Container>
    );
}