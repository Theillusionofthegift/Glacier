import React, { useState } from "react"
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react"
import Container from 'react-bootstrap/Container'
import axios from "axios";
import { useParams } from 'react-router-dom'
import MessageProvider from '../components/messages/MessageProvider'
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

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log(`name ${name} and value ${value}`);
        setMessageValues({
            ...messageValues,
            [name]: value,
        });
        console.log(messageValues);
    };

    const { id } = useParams();
    const handleSubmit = (event) => {
        event.preventDefault();
        const requestConfig = {
            url: `http://localhost:4000/api/v1/conversations/${id}`,
            method: "post",
            headers: { "Content-Type": "application-json" },
            data: {
                user: messageValues.user,
                message: messageValues.message
            }
        };

        axios(requestConfig)
            .then((response) => {
                console.log(`Item Created ${response.data}`);
            })
            .catch((err) => {
                console.log(`We should really handle the error ${err}`);
            });
    };



    return (
        <Container className="pt-5">
            <MessageProvider />
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
