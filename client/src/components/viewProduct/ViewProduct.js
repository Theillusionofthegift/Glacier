import { React, useEffect, useState } from "react";
import {
    Button,
    Container
} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import './ViewProduct.css';
import MapView from '../../views/MapView';
import axios from 'axios'
import placeHolder from '../../images/product.jpg'

function ViewProduct(props) {
    const { isAuthenticated } = useAuth0();

    const { user } = useAuth0();
    const [convoPath, setConvoPath] = useState('');
    const id = user.sub.split('|');

    useEffect(() => {
        const config = {
            url: `http://localhost:4000/api/v1/conversations/?seller=${props.product.seller}&buyer=${id[1]}`,
            method: 'GET',
        }
        axios(config).then((response) => {
            setConvoPath(response.data._id)
        }).catch((err) => {
            console.log('error in ViewProductDetail useEffect');
        })
    }, [])

    const paths = props.product.images;
    const createCarousel = () => {
        if (paths.length !== 0) {
            paths.forEach((path) => {
                const image = `http://localhost:4000${path}`
                return (
                    <Carousel.Item>
                        <img className="d-block w-50 mx-auto" src={image} alt='productView' />
                    </Carousel.Item>
                )
            })
        } else {
            return (
                <Carousel.Item>
                    <img className="d-block w-50 mx-auto" src={placeHolder} alt='productView' />
                </Carousel.Item>)
        }

    }

    return (
        <Container style={{ marginTop: "5em" }}>
            <Container>
                <Carousel >
                    {createCarousel()}
                </Carousel>
            </Container>
            <div className="basicDescription">
                <h2>{props.product.prodName} ${props.product.price} </h2>
                <div className="messageButton">
                    {isAuthenticated ? <Button as={Link} to={`/conversations/${convoPath}`}> Send Message!</Button> : ""}
                </div>
            </div>
            <div className="detailedDescription">
                <p>{props.product.description}</p>
            </div>

            <MapView className="mx-auto" lat={props.product.zipcode.latitude} lng={props.product.zipcode.longitude} readable={props.product.zipcode.readable} />

        </Container>
    );
}

export default ViewProduct;

