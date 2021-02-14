import { React } from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import {Link} from 'react-router-dom'

export default function DropDown(props) {
  return (
    <DropdownButton size="lg" id="cat" title="Categories">
      <Dropdown.Item as={Link} to="/">Category 1</Dropdown.Item>
      <Dropdown.Item as={Link} to="/">Category 2</Dropdown.Item>
      <Dropdown.Item as={Link} to="/">Category 3</Dropdown.Item>
    </DropdownButton>
  )
}