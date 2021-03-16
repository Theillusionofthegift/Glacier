import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import {Link} from 'react-router-dom'
import jwt from 'jwt-decode' // import dependency

export default  function AdminUserButton() {
    const [authToken ,setAuthToken ] = useState({});
    const {getAccessTokenSilently} = useAuth0();

    useEffect( () => {
        async function getToken() {
            return await getAccessTokenSilently();
        }
        const token = getToken();
        console.log(token)
        const {value} = token
        console.log(value)
        const user = jwt(token['<value>'])
        setAuthToken(user)
        console.log(user)
    },[])


    if(authToken) {
        return(<Link to="/admin">Admin</Link>)
    }   else {
        return '';
    }
}