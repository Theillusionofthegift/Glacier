import React from "react";
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from "react-bootstrap/esm/CarouselItem";
import product from '../images/product.jpg';
import './viewProduct.css';

export default function ViewProductDescription(props) {
    return(
        <div>
            <div className="view">
                <Carousel>
                    <CarouselItem>
                        <img src={product} alt='product'/>
                    </CarouselItem>
                    <CarouselItem>
                        <img src={product} alt='product'/>
                    </CarouselItem>
                    <CarouselItem>
                        <img src={product} alt='product'/>
                    </CarouselItem>
                </Carousel>
                <Button type="button">Send Message!</Button>
            </div>
        </div>
    )
}