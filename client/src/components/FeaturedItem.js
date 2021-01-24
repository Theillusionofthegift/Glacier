import React from 'react'
import './FeaturedItem.css'
import item from '../images/item.png'

export default function FeaturedItem() {
    return (
        <div className="container">
            <img className="item" src={item} alt='item'/>
        </div>
    )
}