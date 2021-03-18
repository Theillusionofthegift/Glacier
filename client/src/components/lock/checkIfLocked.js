import React,{useState} from 'react'
import {useAuth0} from '@auth0/auth0-react'
import axios from 'axios'
import { Redirect } from 'react-router';

export default function CheckIfLocked() {
    const {user} = useAuth0();
    const [locked , setLocked ] = useState(true);
    const config = {
        url: `http://localhost:4000/api/v1/users/${user.auth0Id.split('|')[0]}`,
        method: "GET",
      };
  
      axios(config)
        .then((response) => {
          if(response.data.active === true ){
              setLocked(false);
          }
        })
        .catch((err) => {
          console.log("Whoops, something when wrong")
        });

    if(locked) {
        return <Redirect to="/locked" />
    } else {
        return console.log('userAuthenticated')
    }
}