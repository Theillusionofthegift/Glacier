import React, { useState } from "react"
import { Redirect } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react'
import axios from "axios";
import { InputGroup, FormControl, Button, Container } from 'react-bootstrap';

const defaultFormValues = {
    auto0Id: "",
    userName: "",
    email: "",
    firstName: "",
    lastName: "",
    bio: "",
};

export default function CreateProfile() {
    const [profileFormValues, setProfileFormValues] = useState(defaultFormValues);
    const [success, setSuccess] = useState(false);
    const [userId, setUserId] = useState('');
    const { user, getAccessTokenSilently } = useAuth0();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProfileFormValues({
            ...profileFormValues,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        const authToken = await getAccessTokenSilently();
        const id = user.sub.split('|')[1];
        event.preventDefault();
        const requestConfig = {
            url: `http://localhost:4000/api/v1/users/${id}`,
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${authToken}`,
            },
            data: {
                auth0Id: id,
                userName: profileFormValues.userName,
                firstName: profileFormValues.firstName,
                lastName: profileFormValues.lastName,
                bio: profileFormValues.bio,
            },
        };

        axios(requestConfig)
            .then((response) => {
                setUserId(response.data.userId)
                setSuccess(true);
            })
            .catch((err) => {
                alert('Make sure you have filled in every field, before submitting!');
            });
    };

    const redirectString = `/users/upload/${userId}`

    if (success) {
        return <Redirect to={redirectString} />;
    } else {
        return (
            <Container style={{ marginTop: "5em" }}>
                <h1 style={{ textAlign: "center" }}>Update Profile</h1>
                <Container style={{ width: "80%" }}>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Username</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            name="userName"
                            value={profileFormValues.userName}
                            onChange={handleInputChange}
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>First Name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            aria-label="First Name"
                            aria-describedby="basic-addon1"
                            name="firstName"
                            value={profileFormValues.firstName}
                            onChange={handleInputChange}
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Last Name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            aria-label="Last Name"
                            aria-describedby="basic-addon1"
                            name="lastName"
                            value={profileFormValues.lastName}
                            onChange={handleInputChange}
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Bio</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            aria-label="Bio"
                            aria-describedby="basic-addon1"
                            name="bio"
                            value={profileFormValues.bio}
                            onChange={handleInputChange}
                        />
                    </InputGroup>

                    <ProfileUploader />

                    <Button type="submit" onClick={handleSubmit} style={{fontSize: "1.5em"}}>Update</Button>
                </Container>
            </Container>
        )
    }
}
