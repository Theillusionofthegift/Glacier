import { React } from 'react'
import './DropDown.css'

export default function DropDown(props) {
  return (
            <div className="dropdown">
            <button className="dropbtn">Categories</button>
                <div className="dropdown-content">
                  <a href="#">Category 1</a>
                  <a href="#">Category 2</a>
                  <a href="#">Category 3</a>
                  <a href="#">Category 4</a>
                  <a href="#">Category 5</a>
                  <a href="#">Category 6</a>
                  <a href="#">Category 7</a>
                  <a href="#">Category 8</a>
                  <a href="#">Category 9</a>
                  <a href="#">Category 10</a>
               </div>
            </div>
  )
}