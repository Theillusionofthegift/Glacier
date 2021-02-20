import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Profile from '../components/profile/Profile'

export default function ProfileView() {
  const [ Profile, setProfile ] = useState(null);
  const {user} = useAuth0();
  
  useEffect( () => {
    const config = {
        url: `http://localhost:4000/api/v1/users/${user.sub}`,
        method: 'GET',
        headers: { "Content-Type": "application/json" },
      }
      axios(config).then((response) => {
        setProfile(response.data)
      }).catch((err) => {
        console.log('error in ProfileView useEffect');
      })
  },[user.sub])
  
  if (Profile) {
    return <Profile user = {Profile} />
  } else {
    return <div>Loading...</div>
  }

}