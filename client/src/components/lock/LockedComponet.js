import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react'
import { Redirect } from 'react-router';
import Loading from '../loading/Loading';


export default function LockedComponent({ children }) {

  const [locked, setLocked] = useState(null);
  const { user } = useAuth0();
  let id = user.sub.split('|')[1];

  useEffect(() => {
      const config = {
      url: `http://localhost:4000/api/v1/users/${id}`,
      method: "GET",
    };

    axios(config).then((response) => {
      setLocked(!response.data[0].active);
    }).catch((err) => {
      console.log(err);
    })
  }, [id])

  if (locked === null) {
    return <Loading />
  } else if (locked) {
    return <Redirect to="/locked/" />
  } else {
    return children
  }


}