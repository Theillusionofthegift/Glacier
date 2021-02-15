import React, { useState } from react
import { useAuth0 } from '@auth0auth0-react'
import Container from 'react-bootstrapContainer'
import axios from axios;
import MessageProvider from '..componentsmessagesMessageProvider'
import InputGroup from 'react-bootstrapInputGroup'
import FormControl from 'react-bootstrapFormControl'
import Button from 'react-bootstrapButton'

function MessageView() {

    const defaultMessageValues = {
        user: "" ,
        message: "" 
    };

    const [messageValues, setMessageValues] = useState(defaultMessageValues);
    const [success, setSuccess] = useState(false);
    const { user} = useAuth0();




    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log(`name ${name} and value ${value}`);
        setMessageValues({
            ...messageValues,
            [name]: value,
        });
        console.log(productFormValues);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { id } = useParams();
        const requestConfig = {
            url: `httplocalhost:4000/api/v1/conversations/${id}`,
            method: post,
            headers: { "Content-Type": "application-json" },
            data: {
                user: user.sub,
                message: messageValues.message
            }
        };

        axios(requestConfig)
            .then((response) => {
                setSuccess(true);
                console.log(`Item Created ${response.data}`);
            })
            .catch((err) => {
                console.log(`We should really handle the error ${err}`);
            });
    };



    return (
        <Container className="pt-5">
            <MessageProvider />
            <InputGroup className="mb-3">
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

export default MessageView;
