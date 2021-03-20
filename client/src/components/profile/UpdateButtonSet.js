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
            url: `http://localhost:4000/api/v1/users/${id}`,
            method: "DELETE",
        };

        axios(requestConfig)
            .then((response) => {
                console.log(`User Deleted ${response.data}`);
            })
            .catch((err) => {
                console.log(`We should handle the error: ${err}`);
            });
    }

    return(
            <>
                <Button
                as={Link}
                to="/users/update/"
                variant= "primary"
                className="ml-3"
                >
                Update Profile
                </Button>

                <Button
                as={Link}
                onClick={handleDelete}
                to="/"
                variant= "primary"
                className= "ml-3"
                
                >
                Delete Account
                </Button>
            </>
    );
}