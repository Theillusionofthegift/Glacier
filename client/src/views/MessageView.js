import React, { useState, useEffect } from "react"
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react"
import Container from 'react-bootstrap/Container'
import axios from "axios";
import { useLocation } from 'react-router-dom'
import MessageList from '../components/messages/MessageList'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'



function MessageView() {

    const { user } = useAuth0();

    const defaultMessageValues = {
        user: user.sub,
        message: ""
    };

    const [messageValues, setMessageValues] = useState(defaultMessageValues);
    const [messages, setMessages ] = useState({});
    const [loading, setLoading ] = useState(true);
    const location = useLocation();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log(`name ${name} and value ${value}`);
        setMessageValues({
            ...messageValues,
            [name]: value,
        });
        console.log(messageValues);
    };

    const buyerId = user.sub.split('|')

    useEffect(() => {
        const config = {
          url: `http://localhost:4000/api/v1/conversations/?seller=${location.state.seller}&buyer=${buyerId[1]}`,
          method: 'GET',
        }
        axios(config).then((response) => {
          setMessages(response.data)
          setLoading(false);
        }).catch((err) => {
          console.log('error in ViewProductDetail useEffect');
        })
      }, [loading]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const requestConfig = {
            url: `http://localhost:4000/api/v1/conversations/${messages._id}`,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: {
                user: messageValues.user,
                message: messageValues.message
            }
        };

        axios(requestConfig)
            .then((response) => {
                console.log(`Item Created ${response.data}`);
                setLoading(true);
            })
            .catch((err) => {
                console.log(`We should really handle the error ${err}`);
            });
    };


        return (
            <Container className="pt-5">
                { loading ? <div>Loading...</div> : <MessageList messages={messages}/>}
                <InputGroup className="mt-3">
                    <FormControl
                        placeholder="Your Message Here..."
                        aria-label="message"
                        aria-describedby="basic-addon2"
                        name="message"
                        onChange={handleInputChange}
                    />
                    <InputGroup.Append>
                        <Button
                            variant="outline-secondary"
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Send</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Container>
        );
    

}

export default withAuthenticationRequired(MessageView, {
    returnTo: () => `/conversation/`,
  });
