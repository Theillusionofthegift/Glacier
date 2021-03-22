import React from 'react';
import { useHistory } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';


export default function AuthProviderHistory({ children }) {
  const domain = process.env.REACT_APP_AUTH_0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH_0_CLIENT_ID;
  const audience = process.env.REACT_APP_AUTH_0_AUDIENCE;

  const his = useHistory();

  const onRedirect = (auth0State) => {
    his.push(auth0State?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirect}
      audience={audience}
    >
      {children}
    </Auth0Provider>
  );
};
