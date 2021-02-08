import React from "react";
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from "react-bootstrap/esm/CarouselItem";
import product from '../images/product.jpg';
import './viewProduct.css';

export default function ViewProductDescription(props) {
    return(
        <div>
            <div className="carousel">
                <Carousel>
                    <Carousel.Item>
                        <img src={product} alt='productView1'/>
                        <Carousel.Caption>
                            <h3>First View</h3>
                            <p>Short Description Here</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={product} alt='productView2'/>
                        <Carousel.Caption>
                            <h3>Second View</h3>
                            <p>Short Description Here</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={product} alt='productView3'/>
                        <Carousel.Caption>
                            <h3>Third View</h3>
                            <p>Short Description Here</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={product} alt='productView3'/>
                        <Carousel.Caption>
                            <h3>Fourth View</h3>
                            <p>Short Description Here</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={product} alt='productView3'/>
                        <Carousel.Caption>
                            <h3>Fifth View</h3>
                            <p>Short Description Here</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                
            </div>
            <div className="basicDescription">
                <h2>Price $</h2>
                <Button type="button">Send Message!</Button>
            </div>
            <div className="detailedDescription">
                <p>Long Description Here</p>
            </div>
        </div>
    )
}