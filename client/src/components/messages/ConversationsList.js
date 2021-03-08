import React from "react";
import { Container, } from "react-bootstrap";
import Conversations from "./Conversations";


export default function ConversationsList(props) {
    const conversations = props.convos
    return (
        <Container>
            {conversations.map((convo) => (<Conversations key={convo._id} convo={convo} user={props.user}/>))}
        </Container>
    );
}