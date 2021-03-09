import { React } from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

export default function DropDown(props) {
  return (
    <DropdownButton size="lg" id="cat" title="Categories" style={{position: "fixed", top: "3em"}}>
      <Dropdown.Item href="http://localhost:3000/products/?search=Appliances">Appliances</Dropdown.Item>
      <Dropdown.Item href="http://localhost:3000/products/?search=Art%Crafts">Arts and crafts</Dropdown.Item>
      <Dropdown.Item href="http://localhost:3000/products/?search=Audio%Equipment">Audio Equipment</Dropdown.Item>
      <Dropdown.Item href="http://localhost:3000/products/?search=Baby%and%kids">Baby and kids</Dropdown.Item>
      <Dropdown.Item href="http://localhost:3000/products/?search=Beauty%health">Beauty and health</Dropdown.Item>
      <Dropdown.Item href="http://localhost:3000/products/?search=Bicycles">Bicycles</Dropdown.Item>
      <Dropdown.Item href="http://localhost:3000/products/?search=Boats%marine">Boats and marine</Dropdown.Item>
      <Dropdown.Item href="http://localhost:3000/products/?search=Books%magazines">Books and magazines</Dropdown.Item>
      <Dropdown.Item href="http://localhost:3000/products/?search=Business%equipment">Business equipment</Dropdown.Item>
      <Dropdown.Item href="http://localhost:3000/products/?search=Campers%RVs">Campers and RVs</Dropdown.Item>
      <Dropdown.Item href="http://localhost:3000/products/?search=Cars%trucks">Cars and trucks</Dropdown.Item>
      <Dropdown.Item href="http://localhost:3000/products/?search=CDs%DVDs">CDs and DVDs</Dropdown.Item>
      <Dropdown.Item href="http://localhost:3000/products/?search=Cell%phones">Cell phones</Dropdown.Item>
      <Dropdown.Item href="http://localhost:3000/products/?search=Clothing%shoes">Clothing and shoes</Dropdown.Item>
      <Dropdown.Item href="http://localhost:3000/products/?search=Collectibles">Collectibles</Dropdown.Item>
      <Dropdown.Item href="http://localhost:3000/products/?search=Computer">Computer equipment</Dropdown.Item>
      <Dropdown.Item href="http://localhost:3000/products/?search=Electronics">Electronics</Dropdown.Item>
      <Dropdown.Item href="http://localhost:3000/products/?search=Exercise">Exercise</Dropdown.Item>
      <Dropdown.Item href="http://localhost:3000/products/?search=Farming">Farming</Dropdown.Item>
      <Dropdown.Item href="http://localhost:3000/products/?search=Furniture">Furniture</Dropdown.Item>
      <Dropdown.Item href="http://localhost:3000/products/?search=Games%toys">Games and toys</Dropdown.Item>
      <Dropdown.Item href="http://localhost:3000/products/?search=Home%garden">Home and garden</Dropdown.Item>
      <Dropdown.Item href="http://localhost:3000/products/?search=Household">Household</Dropdown.Item>
      <Dropdown.Item href="http://localhost:3000/products/?search=Jewelry%accessories">Jewelry and accessories</Dropdown.Item>
      <Dropdown.Item href="http://localhost:3000/products/?search=Motorcycles">Motorcycles</Dropdown.Item>
      <Dropdown.Item href="http://localhost:3000/products/?search=Musical%instruments">Musical instruments</Dropdown.Item>
      <Dropdown.Item href="http://localhost:3000/products/?search=Pet%supplies">Pet supplies</Dropdown.Item>
      <Dropdown.Item href="http://localhost:3000/products/?search=Photography">Photography</Dropdown.Item>
      <Dropdown.Item href="http://localhost:3000/products/?search=Software">Software</Dropdown.Item>
      <Dropdown.Item href="http://localhost:3000/products/?search=Sports%outdoors">Sports and outdoors</Dropdown.Item>
      <Dropdown.Item href="http://localhost:3000/products/?search=Tickets">Tickets</Dropdown.Item>
      <Dropdown.Item href="http://localhost:3000/products/?search=TVs">TVs</Dropdown.Item>
      <Dropdown.Item href="http://localhost:3000/products/?search=Video%equipment">Video equipment</Dropdown.Item>
      <Dropdown.Item href="http://localhost:3000/products/?search=Video%games">Video games</Dropdown.Item>
    </DropdownButton>
  )
}