import { React } from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

export default function DropDown(props) {
  return (
    <DropdownButton size="lg" id="cat" title="Categories" style={{position: "fixed", top: "4em"}}>
      <Dropdown.Item href="products/?search=Appliances">Appliances</Dropdown.Item>
      <Dropdown.Item href="products/?search=Art%Crafts">Arts and crafts</Dropdown.Item>
      <Dropdown.Item href="products/?search=Audio%Equipment">Audio Equipment</Dropdown.Item>
      <Dropdown.Item href="products/?search=Baby%and%kids">Baby and kids</Dropdown.Item>
      <Dropdown.Item href="products/?search=Beauty%health">Beauty and health</Dropdown.Item>
      <Dropdown.Item href="products/?search=Bicycles">Bicycles</Dropdown.Item>
      <Dropdown.Item href="products/?search=Boats%marine">Boats and marine</Dropdown.Item>
      <Dropdown.Item href="products/?search=Books%magazines">Books and magazines</Dropdown.Item>
      <Dropdown.Item href="products/?search=Business%equipment">Business equipment</Dropdown.Item>
      <Dropdown.Item href="products/?search=Campers%RVs">Campers and RVs</Dropdown.Item>
      <Dropdown.Item href="products/?search=Cars%trucks">Cars and trucks</Dropdown.Item>
      <Dropdown.Item href="products/?search=CDs%DVDs">CDs and DVDs</Dropdown.Item>
      <Dropdown.Item href="products/?search=Cell%phones">Cell phones</Dropdown.Item>
      <Dropdown.Item href="products/?search=Clothing%shoes">Clothing and shoes</Dropdown.Item>
      <Dropdown.Item href="products/?search=Collectibles">Collectibles</Dropdown.Item>
      <Dropdown.Item href="products/?search=Computer">Computer equipment</Dropdown.Item>
      <Dropdown.Item href="products/?search=Electronics">Electronics</Dropdown.Item>
      <Dropdown.Item href="products/?search=Exercise">Exercise</Dropdown.Item>
      <Dropdown.Item href="products/?search=Farming">Farming</Dropdown.Item>
      <Dropdown.Item href="products/?search=Furniture">Furniture</Dropdown.Item>
      <Dropdown.Item href="products/?search=Games%toys">Games and toys</Dropdown.Item>
      <Dropdown.Item href="products/?search=Home%garden">Home and garden</Dropdown.Item>
      <Dropdown.Item href="products/?search=Household">Household</Dropdown.Item>
      <Dropdown.Item href="products/?search=Jewelry%accessories">Jewelry and accessories</Dropdown.Item>
      <Dropdown.Item href="products/?search=Motorcycles">Motorcycles</Dropdown.Item>
      <Dropdown.Item href="products/?search=Musical%instruments">Musical instruments</Dropdown.Item>
      <Dropdown.Item href="products/?search=Pet%supplies">Pet supplies</Dropdown.Item>
      <Dropdown.Item href="products/?search=Photography">Photography</Dropdown.Item>
      <Dropdown.Item href="products/?search=Software">Software</Dropdown.Item>
      <Dropdown.Item href="products/?search=Sports%outdoors">Sports and outdoors</Dropdown.Item>
      <Dropdown.Item href="products/?search=Tickets">Tickets</Dropdown.Item>
      <Dropdown.Item href="products/?search=TVs">TVs</Dropdown.Item>
      <Dropdown.Item href="products/?search=Video%equipment">Video equipment</Dropdown.Item>
      <Dropdown.Item href="products/?search=Video%games">Video games</Dropdown.Item>
    </DropdownButton>
  )
}