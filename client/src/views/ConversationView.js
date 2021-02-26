import React, { useState, useEffect } from "react"
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react"
import Container from 'react-bootstrap/Container'
import axios from "axios";
import ConversationsList from '../components/messages/ConversationsList'

function ConversationView() {
    const { user } = useAuth0();

    const [conversations, setConvserations ] = useState({});
    const [loading, setLoading ] = useState(true);

    useEffect(() => {
        const config = {
          url: `http://localhost:4000/api/v1/conversations/?user=${user.sub}`,
          method: 'GET',
        }
        axios(config).then((response) => {
        setConvserations(response.data)
        setLoading(false);
        }).catch((err) => {
          console.log('error in ViewProductDetail useEffect');
        })
      }, [loading]);


        return (
            <Container className="pt-5">
                { loading ? <div>Loading...</div> : <ConversationsList convos={conversations}/>}
            </Container>
        );
    

}

export default withAuthenticationRequired(ConversationView, {
    returnTo: () => `/conversations/all`,
  });
