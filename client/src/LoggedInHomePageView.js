import LogoBar from './components/LogoBar'
import FeaturedItemGroup from './components/FeaturedItemGroup'
import CatDropDown from './components/DropDown'
import './LoginPage.css'

function App() {
    return (
        <div>
            <LogoBar />
            <CatDropDown />
            <div className="wrapper">
                <FeaturedItemGroup />
                <FeaturedItemGroup />
                <FeaturedItemGroup />
                <FeaturedItemGroup />
            </div>
        </div>
    )
}

export default App;