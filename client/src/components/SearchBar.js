import { React } from 'react'
import './SearchBar.css'

export default function SearchBar(props) {
  return (
            <div className="search">
                <input type="text" className="input" placeholder="Search..." />
                <button className="button">Search</button>
            </div>
  )
}