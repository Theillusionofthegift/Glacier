import React from 'react'
import { Container } from 'react-bootstrap';
import User from './User';

export default function UserDisplay(props) {
    const userList = props.userList
    return (
        <Container>
            {userList.map((user, index) => <User key={index} user={user} />)}
        </Container>
    );
}