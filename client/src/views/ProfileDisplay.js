import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Container } from "react-bootstrap";
import axios from 'axios'

const ProfileDisplay = () => {
    const { user, isLoading } = useAuth0();
    let userProf = "";
    const requestConfig = {
        url: `http://localhost:4000/api/v1/users/${user.sub}`,
        method: "get",
        headers: { "Content-Type": "application/json" },
    };

    axios(requestConfig)
        .then((response) => {
            console.log(`User Exists`);
            userProf = response.data;
        })
        .catch((err) => {
            console.log(`We should really handle the error: ${err}`);
        });

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        <Container >
            <img src={user.picture} alt={userProf.userName} />
            <h2>User Name: {userProf.userName}</h2>
            <p>Name: {userProf.lastName}, {userProf.firstName}</p>
            <p>User Email: {userProf.email}</p>
            <p>User Auth Id: {userProf.auth0id}</p>
        </Container>
    )

};

export default ProfileDisplay;