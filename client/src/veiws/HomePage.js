import './HomePage.css';
import LogoBar from '../components/LogoBar'
import CatDropDown from '../components/DropDown'
import Product from '../components/ProductGroup'

function App() {
  return (
    <div>
      <div className="App">
        <LogoBar />
        <CatDropDown />
      </div>
      <div className= "product">
        <Product />      
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default App;