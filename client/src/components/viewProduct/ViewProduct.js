import {React, useEffect, useState} from "react";
import {Button,
        Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import image from '../../images/product.jpg';
import { Link, Redirect } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import './ViewProduct.css';
import MapView from '../../views/MapView';
import axios from 'axios'

function ViewProduct(props) {
    const { isAuthenticated } = useAuth0();

    const {user} = useAuth0();
    const [convoPath, setConvoPath] = useState('');
    const id = user.sub.split('|');
  
    useEffect(() => {
      const config = {
        url: `http://localhost:4000/api/v1/conversations/?seller=${props.product.seller}&buyer=${id[1]}`,
        method: 'GET',
      }
      axios(config).then((response) => {
        setConvoPath(response.data._id)
        console.log(response.data._id)
      }).catch((err) => {
        console.log('error in ViewProductDetail useEffect');
      })
    },[])

    return(
        <Container style={{marginTop: "5em"}}>  
            <Container>
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
                    {isAuthenticated ? <Button as={Link} to={`/conversations/${convoPath}`}> Send Message!</Button> : "" }
                </div>
                </div>
            <div className="detailedDescription">
                <p>{props.product.description}</p>

            </div>

            <MapView />
        </Container>
    );
}

export default ViewProduct;

