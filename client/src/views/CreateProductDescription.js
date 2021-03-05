import React, { useState } from "react"
import { Redirect } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react'
import axios from "axios";
import { InputGroup, FormControl, Button, Form, } from 'react-bootstrap';
import product from '../images/product.jpg';
import './outfit.css';
import FileUploader from "../components/upload/FileUploader";

const defaultFormValues = {
    prodName: "",
    price: "",
    seller: "",
    description: "",
    category: "",
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
                category: productFormValues.category,
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

                    <Form.Group>
                        <Form.Control 
                            placeholder="Category"
                            as="select"                         
                            name="category"
                            value={productFormValues.categories}
                            onChange={handleInputChange}>
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

                    <FileUploader />
                    <Button type="submit" onClick={handleSubmit}>Submit form</Button>
                </div>
            </div>
        )
    }
}
