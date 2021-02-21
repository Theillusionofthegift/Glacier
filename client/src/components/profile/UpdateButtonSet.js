import React from 'react'

import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

export default function UpdateButtonSet() {
    return(
            <>
                <Button
                as={Link}
                to="/user/upadate/"
                variant= "primary"
                className="ml-3"
                >
                Update Profile
                </Button>

                <Button
                as={Link}
                to="/user/delete/"
                variant= "primary"
                className= "ml-3"
                >
                Delete Account
                </Button>
            </>
    );
}