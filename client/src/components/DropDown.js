import { React } from 'react'
import './DropDown.css'

export default function DropDown(props) {
  return (
            <div class="dropdown">
            <button class="dropbtn">Categories</button>
                <div class="dropdown-content">
                  <a href="#">Category 1</a>
                  <a href="#">Category 2</a>
                  <a href="#">Category 3</a>
                  <a href="#">Category 3</a>
                  <a href="#">Category 3</a>
                  <a href="#">Category 3</a>
               </div>
            </div>
  )
}