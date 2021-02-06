import './HomePage.css';
import CatDropDown from '../components/DropDown'
import Product from '../components/ProductGroup'

function HomePage() {
  return (
    <div>
      <div className="App">
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

export default HomePage;