import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, InputGroup, FormControl, Button } from 'react-bootstrap';
import UserDisplay from '../components/users/UserDisplay'
import ProductDisplay from '../components/products/ProductDisplay'
import { useAuth0 } from '@auth0/auth0-react'

export default function ProfileView() {

    const [searchStringUser, setSearchStringUser] = useState("");
    const [searchStringProducts, setSearchStringProducts] = useState("");
    const [successUser, setSuccessUser] = useState(false);
    const [successProd, setSuccessProd] = useState(false);
    const [userList, setUserList] = useState([]);
    const [prodList, setProdList] = useState([]);
    const [admin, setAdmin] = useState(null);
    const { user } = useAuth0();
    const id = user.sub.split('|')[1]


    useEffect(() => {
        const config = {
            url: `http://localhost:4000/api/v1/users/${id}`,
            method: 'GET',
        }
        axios(config).then((response) => {
<<<<<<< HEAD
            if(response.data[0].userType === 'admin') {
=======
            if (response.data[0].userType === 'admin') {
>>>>>>> main
                setAdmin(response.data);
            }
        }).catch((err) => {
            console.log("Whoops something went wrong!");
        })
    }, [])

    const handleInputChangeUser = (event) => {
        const { value } = event.target;
        setSearchStringUser(value);
    };

    const handleInputChangeProducts = (event) => {
        const { value } = event.target;
        setSearchStringProducts(value);
    };

    const handleSubmitUser = (event) => {
        event.preventDefault();
        let requestConfig
        if (searchStringUser === '') {
            requestConfig = {
                url: `http://localhost:4000/api/v1/users/`,
                method: "GET",
            };
        } else {
            requestConfig = {
                url: `http://localhost:4000/api/v1/users/?userName=${searchStringUser}`,
                method: "GET",
            };
        }


        axios(requestConfig)
            .then((response) => {
                setSuccessProd(false);
                setSuccessUser(true);
                setUserList(response.data)
            })
            .catch((err) => {
                alert(`Whoops something went wrong!`);
            });
    };

    const handleSubmitProducts = (event) => {
        event.preventDefault();
        let requestConfig
        if (searchStringProducts === '') {
            requestConfig = {
                url: `http://localhost:4000/api/v1/products/`,
                method: "GET",
            };
        } else {
            requestConfig = {
                url: `http://localhost:4000/api/v1/products/?prodName=${searchStringProducts}`,
                method: "GET",
            };
        }


        axios(requestConfig)
            .then((response) => {
                setSuccessUser(false);
                setSuccessProd(true);
                setProdList(response.data)
            })
            .catch((err) => {
                alert(`Whoops something went wrong!`);
            })
    };

    if (admin) {
        return (
            <Container style={{ marginTop: "5em" }}>
                <h1 style={{ textAlign: "center", marginBottom: "1em" }}>Admin View</h1>
                <Container>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Search By User Name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            aria-label="User Search"
                            aria-describedby="User Search"
                            name="searchString"
                            value={searchStringUser}
                            onChange={handleInputChangeUser}
                        />
                    </InputGroup>
                    <Button type="submit" onClick={handleSubmitUser}>Submit</Button>
                </Container>
                <Container style={{ marginTop: "2em" }}>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="searchProducts">Search By Product Name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            aria-label="Products Search"
                            aria-describedby="Products Search"
                            name="searchStringProducts"
                            value={searchStringProducts}
                            onChange={handleInputChangeProducts}
                        />
                    </InputGroup>
                    <Button type="submit" onClick={handleSubmitProducts}>Submit</Button>
                </Container>
                <>
                    {successUser ? <UserDisplay userList={userList} /> : ''}
                    {successProd ? <ProductDisplay userList={prodList} /> : ''}
                </>

            </Container>
        )
    } else {
        return <div>You are not a admin</div>
    }


}
