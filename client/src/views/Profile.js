import React from "react";
import ProfileCreate from './ProfileCreate';
import ProfileDisplay from './ProfileDisplay';
import useDBstatus from "../components/hooks/isInDB";
import { useAuth0 } from '@auth0/auth0-react'

const AuthenticationButton = () => {
    const { isAuthenticated } = useAuth0();
    const { user } = useAuth0()
    const exists = useDBstatus(user.sub)

    if (isAuthenticated) {
        exists ? <ProfileDisplay /> : <ProfileCreate />
    }
};

export default AuthenticationButton;