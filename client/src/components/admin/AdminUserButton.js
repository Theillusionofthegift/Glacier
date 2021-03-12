import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import {Link} from 'react-router-dom'

export default function AdminUserButton() {
    const {permissions} = useAuth0();
    
    if(permissions.contains('admin')) {
        return(<Link to="/admin">Admin</Link>)
    }   else {
        return '';
    }
}