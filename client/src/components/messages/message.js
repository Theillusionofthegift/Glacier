import { React } from 'react'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.css';

function Message(props) {
    return (
        <Card className="mb-2">
            <Card.Header as="h5">{props.user}</Card.Header>
            <Card.Body>
                <Card.Text>
                    {props.message}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Message;