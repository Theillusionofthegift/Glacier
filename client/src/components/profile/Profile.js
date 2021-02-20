import React from 'react';
import { 
    Container,
    Figure
} from 'react-bootstrap'
import { useAuth0 } from '@auth0/auth0-react'

export default function Profile(props) {
    const {user} = useAuth0();
    return (
        <Container>
            <Figure>
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src={user.image}
                />
                <Figure.Caption>
                    <h1>UserName: {props.user.userName}</h1>
                    <h1>Full Name: {props.user.lastName}, {props.user.firstName}</h1>
                    <h1>Email: {user.email}</h1>
                </Figure.Caption>
            </Figure>
        </Container>
    );
}