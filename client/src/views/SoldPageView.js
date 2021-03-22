import React, { useState, } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import {
    Container,
    InputGroup,
    Button,
    FormControl,
} from 'react-bootstrap'
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react'

const defaultFormValues = {
    product: "",
    salePrice: "",
    seller: "",
    buyer: "",
};

export default function SoldPageView() {
    const [transFormValues, setTransFormValues] = useState(defaultFormValues);
    const [success, setSuccess] = useState(false);
    const [buyerId, setBuyerId] = useState('')
    const { user } = useAuth0();
    const { id } = useParams();
    const sellerId = user.sub.split('|')[1];

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log(`name ${name} and value ${value}`);
        setTransFormValues({
            ...transFormValues,
            [name]: value,
        });

    };

    const getBuyerId = async () => {
        const requestConfig = {
            url: `http://localhost:4000/api/v1/users/?userName=${transFormValues.buyer}`,
            method: "GET",
        };

        axios(requestConfig)
            .then((response) => {
                setBuyerId(response[0]._id)
                console.log(`User Found`);
            })
            .catch((err) => {
                console.log(`We should handle the error: ${err}`);
            });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        getBuyerId();

        const requestConfig = {
            url: "http://localhost:4000/api/v1/transactions",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                product: id,
                salePrice: transFormValues.salePrice,
                seller: sellerId,
                buyer: buyerId,
            },
        };

        const requestConfig1 = {
            url: "http://localhost:4000/api/v1/transactions",
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                available: false,
            },
        };

        axios(requestConfig)
            .then((response) => {
                console.log(`Transaction created!`);
            })
            .catch((err) => {
                console.log(`We should handle the error: ${err}`);
            });

        axios(requestConfig1)
            .then((response) => {
                console.log(`Product Updated!`);
                setSuccess(true);
            })
            .catch((err) => {
                console.log(`We should handle the error: ${err}`);
            });
    };


    if (success) {
        return <Redirect to="/" />;
    } else {
        return (
            <Container style={{ marginTop: "5em" }}>
                <h1 style={{ textAlign: "center" }}>Mark As Sold</h1>
                <Container>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Buyer UserName</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            aria-label="Buyer UserName"
                            aria-describedby="basic-addon1"
                            name="userName"
                            value={transFormValues.buyer}
                            onChange={handleInputChange}
                        />
                    </InputGroup>


                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Price $</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            aria-label="Amount per item(to the nearest dollar)"
                            name="price"
                            value={transFormValues.salePrice}
                            onChange={handleInputChange}
                        />
                        <InputGroup.Append>
                            <InputGroup.Text>.00</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>

                    <Button type="submit" onClick={handleSubmit}>Submit</Button>
                </Container>
            </Container>);
    }
}