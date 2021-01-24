import {React} from 'react'
import './product.css'
import item from './images/item.png'
import LogoBar from './components/LogoBar'

export default function CreateProductDescription(props){
    return(
        <div>
            <LogoBar />
            <div className="item">
                <img className="size" src={item} alt='item'/>
                <img className="size" src={item} alt='item'/>
                <img className="size" src={item} alt='item'/>
                <img className="size" src={item} alt='item'/>
                <img className="size" src={item} alt='item'/>
            </div>
            <div className="description">
                    <input type="text" name="" id="t1"></input>
                    <input type="text" name="" id="t2"></input>
                    <button>submit</button>
            </div>
        </div>
    )
}