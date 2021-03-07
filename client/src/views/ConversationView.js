import React, { useState, useEffect } from "react"
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react"
import Container from 'react-bootstrap/Container'
import axios from "axios";
import ConversationsList from '../components/messages/ConversationsList'
import Loading from '../components/loading/Loading'

function ConversationView() {
    const { user } = useAuth0();
    const id = user.sub.split('|');

    const [conversations, setConvserations ] = useState({});
    const [loading, setLoading ] = useState(true);

    useEffect(() => {
        const config = {
          url: `http://localhost:4000/api/v1/conversations/?user=${id[1]}`,
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
                { loading ? <Loading /> : <ConversationsList convos={conversations} user={id[1]}/>}
            </Container>
        );
    

}

export default withAuthenticationRequired(ConversationView, {
    returnTo: () => `/conversations/all`,
  });
