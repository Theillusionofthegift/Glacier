import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import axios from 'axios' // import dependency

export default  function AdminUserButton() {
    const [admin, setAdmin] = useState(false);
    const { user } = useAuth0();
    const id = user.sub.split('|')[1]

    useEffect(() => {
        const config = {
            url: `http://localhost:4000/api/v1/users/${id}`,
            method: 'GET',
        }
        axios(config).then((response) => {
            console.log(response.data[0].userType)
            if(response.data[0].userType === 'admin') {
                setAdmin(true)
            }
        }).catch((err) => {
            console.log(`error in AdminButton useEffect`);
        })
    }, [])


    if(admin) {
        return(<Button as={Link} to="/admin">Admin</Button>)
    }   else {
        return '';
    }
}