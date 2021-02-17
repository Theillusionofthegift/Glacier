import React from "react";
import ProfileCreate from './ProfileCreate';
import ProfileDisplay from './ProfileDisplay';
import useDBstatus from "../components/hooks/isInDB";
import { useAuth0 } from '@auth0/auth0-react'

const Profile = () => {

    const { user } = useAuth0()
    const exists = useDBstatus(user.sub)

    return exists ? <ProfileDisplay /> : <ProfileCreate />
};

export default Profile;