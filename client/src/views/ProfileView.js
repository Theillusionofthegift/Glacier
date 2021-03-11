import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Profile from '../components/profile/Profile'
import ProfileProducts from '../components/profile/ProfileProducts';
import { Container } from 'react-bootstrap';

export default function ProfileView() {
  const [ profile, setProfile ] = useState({});
  const {user, getAccessTokenSilently} = useAuth0();

  const id = user.sub.split('|')
  
  useEffect( () => {
    async function getToken() {
      const authToken = await getAccessTokenSilently();
      }
    const token = getToken();
    const config = {
        url: `http://localhost:4000/api/v1/users/${id[1]}`,
        method: 'GET',
        headers: { "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
        },

      }
      axios(config).then((response) => {
        setProfile(response.data[0])
      }).catch((err) => {
        console.log(`error in ProfileView useEffect`);
      })
  },[])
  
  if (profile) {
    return (
      <Container style={{marginTop:"5em"}}> 
            <Profile user= {profile} /> 
            <ProfileProducts user={profile} />
      </Container>
        )
  } else {
    return <div>Loading...</div>
  }

}