import { React } from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

export default function DropDown(props) {
  return (
    <DropdownButton size="lg" id="cat" title="Categories">
      <Dropdown.Item href="/">Category 1</Dropdown.Item>
      <Dropdown.Item href="/">Category 2</Dropdown.Item>
      <Dropdown.Item href="/">Category 3</Dropdown.Item>
    </DropdownButton>
  )
}