import React from 'react';
import { useHistory } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

/* This component is borrowed from
https://auth0.com/blog/complete-guide-to-react-user-authentication/ */

const AuthProviderWithHistory = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH_0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH_0_CLIENT_ID;
  const audience = process.env.REACT_APP_AUTH_0_AUDIENCE;

  const history = useHistory();

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      audience={audience}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProviderWithHistory;