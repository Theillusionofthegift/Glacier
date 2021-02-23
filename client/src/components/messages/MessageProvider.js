import React from "react";
import MessageList from "./MessageList";

export default function MessageProvider(props) {
   if (props.messages) {
      return <MessageList messages={props.messages.messages} users ={props.messages.users}/>;
    } else {
      return <div>Whoops, something went wrong! Reload</div>;
    }
  
}

