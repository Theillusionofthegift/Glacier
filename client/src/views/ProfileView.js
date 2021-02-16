import './ProfileView.css';
import Profile from '../components/profile/Profile'
import {Redirect} from "react-router-dom";

function ProfileView() {
    return (
        <div className = "profileView">
            <Profile />
        </div>
    )
}

export default ProfileView;