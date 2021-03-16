import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, InputGroup, FormControl, Button } from 'react-bootstrap';
import UserDisplay from '../components/users/UserDisplay'
import { Redirect } from 'react-router';
import { useAuth0 } from '@auth0/auth0-react'

export default function ProfileView() {

    const [searchString, setSearchString] = useState('');
    const [success, setSuccess] = useState(false);
    const [userList, setUserList] = useState([]);
    const [admin, setAdmin] = useState(false);
    const { user } = useAuth0;
    const id = user.sub.split('|')[1]


    useEffect(() => {
        const config = {
            url: `http://localhost:4000/api/v1/users/${id}`,
            method: 'GET',
        }
        axios(config).then((response) => {
            if(response.data.userType === 'admin') {
                setAdmin(true)
            }
        }).catch((err) => {
            console.log(`error in ProfileView useEffect`);
        })
    }, [])

    const handleInputChange = (event) => {
        const { value } = event.target;
        console.log(`value ${value}`);
        setSearchString({
            searchString,
            value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const requestConfig = {
            url: `http://localhost:4000/api/v1/users/?userName=${searchString}`,
            method: "GET",
        };

        axios(requestConfig)
            .then((response) => {
                setSuccess(true);
                setUserList(response.data)
                console.log(`Item Created ${response.data}`);
            })
            .catch((err) => {
                console.log(`We should really handle the error: ${err}`);
            });
    };

    if (admin) {
        return (
            <Container style={{ marginTop: "5em" }}>
                <>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Searh Users</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Search By User Name"
                            aria-label="User Search"
                            aria-describedby="User Search"
                            name="userSearch"
                            value={searchString}
                            onChange={handleInputChange}
                        />
                    </InputGroup>
                    <Button type="submit" onClick={handleSubmit}>Submit</Button>
                </>
                <>
                    {success ? <UserDisplay userList={userList} /> : ''}
                </>
            </Container>
        )
    } else {
        return <Redirect to="/" />
    }


}
