import React, { useState } from "react"
import { Redirect } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react'
import axios from "axios";
import { InputGroup, FormControl, Button, Form, Container } from 'react-bootstrap';



const defaultFormValues = {
    prodName: "",
    price: "",
    seller: "",
    description: "",
    category: "",
    zipcode: "",
};



export default function CreateProduct() {

    const [productFormValues, setProductFormValues] = useState(defaultFormValues);
    const [success, setSuccess] = useState(false);
    const [prodId, setProdId] = useState('');
    const { user } = useAuth0();
    const id = user.sub.split('|');




    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log(`name ${name} and value ${value}`);
        setProductFormValues({
            ...productFormValues,
            [name]: value,
        });
        console.log(productFormValues);
    };

    const handleSubmit = (event) => {

        event.preventDefault();
        const requestConfig = {
            url: "http://localhost:4000/api/v1/products",
            method: "post",
            headers: { "Content-Type": "application/json" },
            data: {
                prodName: productFormValues.prodName,
                price: productFormValues.price,
                seller: id[1],
                description: productFormValues.description,
                category: productFormValues.category,
                zipcode: productFormValues.zipcode,
            },
        };

        axios(requestConfig)
            .then((response) => {
                setProdId(response.data.productId)
                setSuccess(true);
            })
            .catch((err) => {
                alert('Make sure you have filled in every field, before submitting!'); // (3)
            });

            
    };

    const redirectString = `/products/upload/${prodId}`

    if (success) {
        return <Redirect to={redirectString} />;
    } else {
        return (
            <Container fluid style={{ width: "45%", marginTop: "5em" }}>
                <Container style={{ textAlign: "center", marginBottom: "3em" }}>
                    <h1>Sell Your Item</h1>
                </Container>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Product's Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        aria-label="Product's Name"
                        aria-describedby="text"
                        name="prodName"
                        value={productFormValues.prodName}
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
                        value={productFormValues.price}
                        onChange={handleInputChange}
                    />
                    <InputGroup.Append>
                        <InputGroup.Text>.00</InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text>Item Description</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        as="textarea"
                        aria-label="Item Description"
                        name="description"
                        value={productFormValues.description}
                        onChange={handleInputChange}
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text>Zipcode</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        aria-label="Zipcode"
                        name="zipcode"
                        value={productFormValues.zipcode}
                        onChange={handleInputChange}
                    />
                </InputGroup>

                <Form.Group>
                    <Form.Control
                        aria-label="Category"
                        placeholder="Category"
                        as="select"
                        name="category"
                        value={productFormValues.categories}
                        onChange={handleInputChange}>
                        <option>Categories</option>
                        <option>Appliances</option>
                        <option>Arts and crafts</option>
                        <option>Audio Equipment</option>
                        <option>Baby and kids</option>
                        <option>Beauty and health</option>
                        <option>Bicycles</option>
                        <option>Boats and marine</option>
                        <option>Books and magazines</option>
                        <option>Business equipment</option>
                        <option>Campers and RVs</option>
                        <option>Cars and trucks</option>
                        <option>CDs and DVDs</option>
                        <option>Cell phones</option>
                        <option>Clothing and shoes</option>
                        <option>Collectibles</option>
                        <option>Computer equipment</option>
                        <option>Electronics</option>
                        <option>Exercise</option>
                        <option>Farming</option>
                        <option>Furniture</option>
                        <option>Games and toys</option>
                        <option>Home and garden</option>
                        <option>Household</option>
                        <option>Jewelry and accessories</option>
                        <option>Motorcycles</option>
                        <option>Musical instruments</option>
                        <option>Pet supplies</option>
                        <option>Photography</option>
                        <option>Software</option>
                        <option>Sports and outdoors</option>
                        <option>Tickets</option>
                        <option>TVs</option>
                        <option>Video equipment</option>
                        <option>Video games</option>
                    </Form.Control>

                </Form.Group>
                <Button type="submit" onClick={handleSubmit}>Submit form</Button>
            </Container>
        )
    }
}
