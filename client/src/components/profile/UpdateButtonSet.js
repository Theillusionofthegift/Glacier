import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import {useAuth0} from '@auth0/auth0-react'

export default function UpdateButtonSet() {
    
    const {user} = useAuth0();
    const handleDelete = (event) => {
        const id = user.sub.split('|')[1];
        event.preventDefault();
        const requestConfig = {
            url: `http://localhost:4000/api/v1/users/${user.sub.split('|')[1]}`,
            method: "DELETE",
        };

        axios(requestConfig)
            .then((response) => {
                alert(`User Deleted`);
            })
            .catch((err) => {
                alert("Whoops, something when wrong")
            });
    }

    return(
            <>
                <Button
                as={Link}
                to="/users/update/"
                variant= "primary"
                className="ml-3"
                style={{fontSize: "1.5em"}}
                >
                Update Profile
                </Button>

                <Button
                as={Link}
                to="/"
                onClick={handleDelete}
                variant= "primary"
                className= "ml-3"
                style={{fontSize: "1.5em"}}
                >
                Delete Account
                </Button>
            </>
    );
}