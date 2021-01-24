import { React } from 'react'
import logo from '../images/glacier.png'
import Search from './SearchBar'
import ButtonSet from './ButtonSet'
import './LogoBar.css'

export default function LogoBar(props) {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="Glacier Logo"/>
      <h1 className="title">Glacier</h1>
      <Search />
      <ButtonSet />
    </div>
  )
}