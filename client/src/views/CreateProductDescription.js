import React from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from "react-bootstrap/FormControl";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import product from '../images/product.jpg';
import './outfit.css';



export default function CreateProductDescription(props){
    return(
        <div>
            <h1 className="title">Sell Your Item Now! Right Now!!</h1>
            <img className="image" src={product} alt='product'/>
            <div className="outfit">
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Product's Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    placeholder="Product's Name"
                    aria-label="Product's Name"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">How Many Available</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    placeholder="Amount of the Item"
                    aria-label="Amount of the Item"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text>Per One $</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl aria-label="Amount per item(to the nearest dollar)" />
                    <InputGroup.Append>
                    <InputGroup.Text>.00</InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>

                <InputGroup>
                    <InputGroup.Prepend>
                    <InputGroup.Text>Item Description</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl as="textarea" aria-label="With textarea" />
                </InputGroup>

                <div className="mb-3">
                    <Form.File id="formcheck-api-regular">
                    <Form.File.Label>Regular file input</Form.File.Label>
                    <Form.File.Input />
                    </Form.File>
                </div>
                <Button type="submit">Submit form</Button>
            </div>
        </div>
    )
}
