import React from "react";
import {Button,
        Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import image from '../../images/product.jpg';
import {Link} from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import './ViewProduct.css';
import MapView from '../../views/MapView';

function ViewProduct(props) {
    const { isAuthenticated } = useAuth0();
    return(
        <Container>
            <Container className="mt-3">
                <Carousel >
                    <Carousel.Item>
                        <img className="d-block w-50 mx-auto" src={image} alt='productView1'/>
                        <Carousel.Caption>
                            <h3>First View</h3>
                            <p>Short Description Here</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-50 mx-auto" src={image} alt='productView2'/>
                        <Carousel.Caption>
                            <h3>Second View</h3>
                            <p>Short Description Here</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-50 mx-auto" src={image} alt='productView3'/>
                        <Carousel.Caption>
                            <h3>Third View</h3>
                            <p>Short Description Here</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-50 mx-auto" src={image} alt='productView3'/>
                        <Carousel.Caption>
                            <h3>Fourth View</h3>
                            <p>Short Description Here</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-50 mx-auto" src={image} alt='productView3'/>
                        <Carousel.Caption>
                            <h3>Fifth View</h3>
                            <p>Short Description Here</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                
            </Container>
            <div className="basicDescription">
                <h2>{props.product.prodName} ${props.product.price} </h2>
                <div className="messageButton">
                    {isAuthenticated ? <Button as={Link} to={{ pathname:'/conversation/', state:{ seller: props.product.seller}}}> Send Message!</Button> : "" }
                </div>
                </div>
            <div className="detailedDescription">
                <p>{props.product.description}</p>
            </div>

            <MapView className="mx-auto" zipcode={props.product.zipcode}/>
            
        </Container>
    );
}

export default ViewProduct;

