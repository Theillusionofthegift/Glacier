import React, { useReducer } from 'react';
import { 
    Container,
    Figure
} from 'react-bootstrap'

export default function Profile(props) {
    return (
        <Container>
            <Figure>
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src={props.image}
                />
                <Figure.Caption>
                    UserName: {props.userName}
                    Full Name: {props.lastName}, {props.firstName}
                    Email: {props.email}
                </Figure.Caption>
            </Figure>
        </Container>
    );
}