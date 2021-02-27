import React, { useState } from "react"
import { Redirect } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react'
import axios from "axios";
import { InputGroup, FormControl, Button, Form, DropdownButton, Dropdown } from 'react-bootstrap';
import product from '../images/product.jpg';
import './outfit.css';

const defaultFormValues = {
    prodName: "",
    price: "",
    seller: "",
    description: "",
    categories: "",
};



export default function CreateProduct() {

    const [productFormValues, setProductFormValues] = useState(defaultFormValues);
    const [success, setSuccess] = useState(false);
    const { user } = useAuth0();




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
                seller: user.sub,
                description: productFormValues.description,
                categories: productFormValues.categories,
            },
        };

        axios(requestConfig)
            .then((response) => {
                setSuccess(true);
                console.log(`Item Created ${response.data}`);
            })
            .catch((err) => {
                console.log(`We should really handle the error: ${err}`);
            });
    };


    if (success) {
        return <Redirect to="/" />;
    } else {
        return (
            <div className="wrapper">
                <h1 className="title">Sell Your Item Now!</h1>
                <img className="image" src={product} alt='product' />
                <div className="outfit">
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Product's Name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Product's Name"
                            aria-label="Product's Name"
                            aria-describedby="basic-addon1"
                            name="prodName"
                            value={productFormValues.prodName}
                            onChange={handleInputChange}
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Per One $</InputGroup.Text>
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
                            aria-label="With textarea"
                            name="description"
                            value={productFormValues.description}
                            onChange={handleInputChange}
                        />
                    </InputGroup>

                    <InputGroup>
                        <FormControl
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            name="categories"
                            value={productFormValues.categories}
                            onChange={handleInputChange}
                        />
                        <DropdownButton
                            as={InputGroup.Append}
                            variant="outline-primary"
                            title="Categories"
                            id="input-categories-2"
                        >
                            <Dropdown.Item >Appliances</Dropdown.Item>
                            <Dropdown.Item >Arts and crafts</Dropdown.Item>
                            <Dropdown.Item >Audio Equipment</Dropdown.Item>
                            <Dropdown.Item >Baby and kids</Dropdown.Item>
                            <Dropdown.Item >Beauty and health</Dropdown.Item>
                            <Dropdown.Item >Bicycles</Dropdown.Item>
                            <Dropdown.Item >Boats and marine</Dropdown.Item>
                            <Dropdown.Item >Books and magazines</Dropdown.Item>
                            <Dropdown.Item >Business equipment</Dropdown.Item>
                            <Dropdown.Item >Campers and RVs</Dropdown.Item>
                            <Dropdown.Item >Cars and trucks</Dropdown.Item>
                            <Dropdown.Item >CDs and DVDs</Dropdown.Item>
                            <Dropdown.Item >Cell phones</Dropdown.Item>
                            <Dropdown.Item >Clothing and shoes</Dropdown.Item>
                            <Dropdown.Item >Collectibles</Dropdown.Item>
                            <Dropdown.Item >Computer equipment</Dropdown.Item>
                            <Dropdown.Item >Electronics</Dropdown.Item>
                            <Dropdown.Item >Exercise</Dropdown.Item>
                            <Dropdown.Item >Farming</Dropdown.Item>
                            <Dropdown.Item >Furniture</Dropdown.Item>
                            <Dropdown.Item >Games and toys</Dropdown.Item>
                            <Dropdown.Item >Home and garden</Dropdown.Item>
                            <Dropdown.Item >Household</Dropdown.Item>
                            <Dropdown.Item >Jewelry and accessories</Dropdown.Item>
                            <Dropdown.Item >Motorcycles</Dropdown.Item>
                            <Dropdown.Item >Musical instruments</Dropdown.Item>
                            <Dropdown.Item >Pet supplies</Dropdown.Item>
                            <Dropdown.Item >Photography</Dropdown.Item>
                            <Dropdown.Item >Software</Dropdown.Item>
                            <Dropdown.Item >Sports and outdoors</Dropdown.Item>
                            <Dropdown.Item >Tickets</Dropdown.Item>
                            <Dropdown.Item >TVs</Dropdown.Item>
                            <Dropdown.Item >Video equipment</Dropdown.Item>
                            <Dropdown.Item >Video games</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>

                        <div className="mb-3">
                            <Form.File id="formcheck-api-regular">
                                <Form.File.Label>Regular file input</Form.File.Label>
                                <Form.File.Input />
                            </Form.File>
                        </div>
                        <Button type="submit" onClick={handleSubmit}>Submit form</Button>
                </div>
                </div>
        )
    }
}
