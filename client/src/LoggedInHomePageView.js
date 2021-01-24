import LogoBar from './components/LogoBar'
import Product from './components/ProductGroup'
import CatDropDown from './components/DropDown'
import './LoggedInHomePageView.css'
import messagingIcon from './images/conversation.png'

function App() {
    return (
        <div>
            <LogoBar />
            <CatDropDown />
            <div className="product">
                <Product />      
                <Product />
                <Product />
            </div>
            <img className="messagingIcon" src={messagingIcon} alt="messaging icon"/>
        </div>
    )
}

export default App;