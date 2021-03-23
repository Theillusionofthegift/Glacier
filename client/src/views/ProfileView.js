import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Profile from '../components/profile/Profile'
import { Container } from 'react-bootstrap';
import { Redirect } from 'react-router';
import Loading from '../components/loading/Loading'

export default function ProfileView() {
  const [profile, setProfile] = useState({});
  const { user, getAccessTokenSilently } = useAuth0();
  const id = user.sub.split('|')

  useEffect(() => {
    async function getToken() {
      return await getAccessTokenSilently();
    }
    const token = getToken();
    const config = {
      url: `http://localhost:4000/api/v1/users/${id[1]}`,
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

    }
    axios(config).then((response) => {
      setProfile(response.data[0])
    }).catch((err) => {
      console.log('Whoops something went wrong!');
    })
  }, [])

  if (profile) {
    if (profile) {
      return (
        <Container style={{ marginTop: "5em" }}>
          <Profile user={profile} />
        </Container>
      )
    } else {
      return <Redirect to="/" />
    }
  } else {
    return <Loading />
  }

}