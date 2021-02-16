import React from 'react';
import {useAuth0} from '@auth0/auth0-react';

const Profile = () => {
    const {user, isAuthenticated, isLoading} = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        isAuthenticated && (
            <div>
            <h1>Hello {user.name}</h1>
            <h2>Registered email: {user.email}</h2>
            </div>
        )
    );
};

export default Profile;