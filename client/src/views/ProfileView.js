import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Profile from '../components/profile/Profile'

export default function ProfileView() {
  const [ profile, setProfile ] = useState({});
  const {user, getAccessTokenSilently} = useAuth0();
  console.log(user);
  
  useEffect( () => {
    async function getToken() {
      const authToken = await getAccessTokenSilently();
      console.log('auth token ', authToken);
      }
      getToken();
    const config = {
        url: `http://localhost:4000/api/v1/users/${user.sub}`,
        method: 'GET',
        headers: { "Content-Type": "application/json" },
      }
      axios(config).then((response) => {
        setProfile(response.data)
      }).catch((err) => {
        console.log(`error in ProfileView useEffect ${user.sub}`);
      })
  },)
  
  if (profile) {
    return <Profile user= {profile} />
  } else {
    return <div>Loading...</div>
  }

}