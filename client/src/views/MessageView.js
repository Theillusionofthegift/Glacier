import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react"
import Container from 'react-bootstrap/Container'
import axios from "axios";
import MessageList from '../components/messages/MessageList'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Loading from '../components/loading/Loading'

const defaultMessageValues = {
    user: "",
    message: ""
};

function MessageView() {
    const { user } = useAuth0();
    const { id } = useParams();
    const [messageValues, setMessageValues] = useState(defaultMessageValues);
    const [messages, setMessages] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const config = {
            url: `http://localhost:4000/api/v1/conversations/${id}`,
            method: 'GET',
        }

        axios(config).then((response) => {
            setMessages(response.data)
            setLoading(false);
        }).catch((err) => {
            console.log(`Whoops something went wrong!`);
        })
    }, [loading]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setMessageValues({
            ...messageValues,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const requestConfig = {
            url: `http://localhost:4000/api/v1/conversations/${messages._id}`,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: {
                user: user.sub.split('|')[1],
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
            { loading ? <Loading /> : <MessageList messages={messages} />}
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
    returnTo: () => `/conversations`,
});
