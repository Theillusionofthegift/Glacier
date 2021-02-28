import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Profile from '../components/profile/Profile'
import ProfileProducts from '../components/profile/ProfileProducts';

export default function ProfileView() {
  const [ profile, setProfile ] = useState({});
  const {user, getAccessTokenSilently} = useAuth0();
  console.log(user);
  const id = user.sub.split('|')
  
  useEffect( () => {
    async function getToken() {
      const authToken = await getAccessTokenSilently();
      console.log('auth token ', authToken);
      }
    const token = getToken();
    console.log(token);
    const config = {
        url: `http://localhost:4000/api/v1/users/${id[1]}`,
        method: 'GET',
        headers: { "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
        },

      }
      axios(config).then((response) => {
        setProfile(response.data)
      }).catch((err) => {
        console.log(`error in ProfileView useEffect ${user.sub}`);
      })
  },[])
  
  if (profile) {
    return (
      <> 
            <Profile user= {profile} /> 
            <ProfileProducts user={profile} />
      </>
        )
  } else {
    return <div>Loading...</div>
  }

}