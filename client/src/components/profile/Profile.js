import React from 'react';
import { Container, Image, Tabs, Tab } from 'react-bootstrap'
import { useAuth0 } from '@auth0/auth0-react'
import UpdateButtonSet from './UpdateButtonSet'
import ProfileProducts from '../profile/ProfileProducts'
import placeHolder from '../../images/userProfile.jpg'

export default function Profile(props) {
        
    const { user } = useAuth0();
    let prodImage;
    if (props.user.images !== undefined) {
      prodImage = `http://localhost:4000/${props.user.image}`;
    } else {
      prodImage = placeHolder;
    }

    if (props.user._id) {
        return (
            <Container className="mt-3">
                <Image src={prodImage} alt="User Picture" style={{ maxHeight: "10em" }} fluid />
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="profile" title="Profile">
                        <h1>UserName: {props.user.userName}</h1>
                        <h1>Full Name: {props.user.lastName}, {props.user.firstName}</h1>
                        <h1>Bio:</h1>
                        <p>{props.user.bio}</p>
                    </Tab>
                    <Tab eventKey="contact" title="Contact Info">
                        <h1>Email: {user.email}</h1>
                    </Tab>
                    {user.user_id === props.user.Auth0Id ? <Tab eventKey="change" title="Update" >  <UpdateButtonSet /> </Tab> : ''}
                    <Tab eventKey="products" title="Selling">
                        <ProfileProducts user={props.user} />
                    </Tab>
                </Tabs>
            </Container>
        );
    } else {
        return <Container className='mx-auto'><h1 className="mx-auto">Profile Not Found!</h1></Container>
    }
}
