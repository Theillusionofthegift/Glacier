import { React, useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'

function Message(props) {
  const [currentUser, setUserName] = useState(null);

  useEffect(() => {
    const config = {
      url: `http://localhost:4000/api/v1/users/${props.user}`,
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    }
    axios(config).then((response) => {
      setUserName(response.data[0]);
    }).catch((err) => {
      console.log(err);
    })
  }, []);

  if (currentUser) {
    return (
      <Card className="mb-2">
        <Card.Header as="h5">{currentUser.userName}</Card.Header>
        <Card.Body>
          <Card.Text>
            {props.message}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  } else {
    return <div></div>
  }
}

export default Message;