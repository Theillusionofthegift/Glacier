import React from "react";
import Button from 'react-bootstrap/Button'
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <Button
      className="ml-auto"
      variant="primary"
      style={{ fontSize: "1.5em", fontWeight: 'bold' }}
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }>
      Log Out
    </Button>
  );
};

export default LogoutButton;