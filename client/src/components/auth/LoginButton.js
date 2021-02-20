import React from "react";
import Button from 'react-bootstrap/Button'
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
    <Button
      className="mx-1"
      variant="primary"
      onClick={() => {
        loginWithRedirect();
      }}
    >
      Login
    </Button>
    <Button
      className="mx-1"
      variant="primary"
      onClick={() => {
        loginWithRedirect({ 
          screen_hint: 'signup',
          redirect_uri: 'https://localhost:3000/users/new'
        });
      }}
    >
      Sign Up
    </Button>
  </>
  );
};

export default LoginButton;