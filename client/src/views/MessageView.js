import './message.css';
import Container from 'react-bootstrap/Container'
import Toast from 'react-bootstrap/Toast'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

function HomePage() {
    return (
        <Container className="pt-5">
            <Toast>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                    <strong className="mr-auto">Seller</strong>
                    <small>10 min ago</small>
                </Toast.Header>
                <Toast.Body>Hello.</Toast.Body>
            </Toast>
            <Toast>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                    <strong className="mr-auto">Seller</strong>
                    <small>9 min ago</small>
                </Toast.Header>
                <Toast.Body>I can do 400.</Toast.Body>
            </Toast>
            <div
                aria-live="polite"
                aria-atomic="true"
                style={{
                    position: 'relative',
                    minHeight: '200px',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                    }}
                >
                    <Toast>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                            <strong className="mr-auto">Buyer</strong>
                            <small>2 seconds ago</small>
                        </Toast.Header>
                        <Toast.Body>How about 350?</Toast.Body>
                    </Toast>
                    <Toast>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                            <strong className="mr-auto">Buyer</strong>
                            <small>just now</small>
                        </Toast.Header>
                        <Toast.Body>Where are you located?</Toast.Body>
                    </Toast>
                </div>
            </div>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Your Message Here..."
                    aria-label="message "
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary">Send</Button>
                </InputGroup.Append>
            </InputGroup>
        </Container>
    );
}

export default HomePage;