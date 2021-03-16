import React from "react";
import Button from 'react-bootstrap/Button'
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <Button
      className="ml-auto"
      variant="primary"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
      size="lg">
      Log Out
    </Button>
  );
};

export default LogoutButton;