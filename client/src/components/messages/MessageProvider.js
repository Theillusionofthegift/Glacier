import React, { useEffect, useState } from "react";
import axios from "axios";
import MessageList from "./MessageList";
import { useAuth0 } from '@auth0/auth0-react';

export default function MessageProvider(props) {
  // workitem accept some range or filters for events to retrieve
     const messDefault = {
      users: [],
      messages: [],
    };
    const seller = props.location.state.seller;
  
  const [ messages, setMessage ] = useState(messDefault);
  const [ loading, setLoading ] = useState(true);
  const { user } = useAuth0();
  

  useEffect(() => {
    let conv;
    console.log("[ProductProvider] componentDidMount, great for making the first network calls");
    const Config1 = {
      url: `http://localhost:4000/api/v1/conversations/`,
      method: "POST",
      headers: { "Content-Type": "application/json"},
      data: {
        users: [user.user_id, seller]
      }
    };
    axios(Config1)
      .then((response) => {
        conv = response.data;
      })
      .catch((err) => {
        console.log('Error on POST')
      });
    const Config2 = {
      url: `http://localhost:4000/api/v1/conversations/${conv}`,
      method: "GET",
      headers: { "Content-Type": "application/json"},
    };
    axios(Config2)
    .then((response) => {
      setMessage(response.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log('Error on POST')
      setLoading(false);
    });  


  },);

    if (loading) {
      return <div>Loading ...</div>;
    } else if (this.state.messages.length > 0) {
      return <MessageList messages={messages.messages} users ={messages.users}/>;
    } else {
      return <div>Whoops, something went wrong! Reload</div>;
    }
  
  }

