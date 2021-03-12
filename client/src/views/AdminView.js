import React, { useState } from 'react';
import axios from 'axios';
import { Container, InputGroup, FormControl, Button } from 'react-bootstrap';
import UserDisplay from '../components/users/UserDisplay'

export default function ProfileView() {

    const [searchString, setSearchString] = useState('');
    const [success, setSuccess] = useState(false);
    const [userList, setUserList] = useState([]);

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


    return (
        <Container style={{ marginTop: "5em" }}>
            <>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Product's Name</InputGroup.Text>
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
                <Button type="submit" onClick={handleSubmit}>Submit form</Button>
            </>
            <>
                {success ? <UserDisplay userList={userList} /> : ''}
            </>
        </Container>
    )
}
