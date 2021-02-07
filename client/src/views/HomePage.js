import './HomePage.css';
import CatDropDown from '../components/navbar/DropDown'
import Product from '../components/products/ProductProvider'

function HomePage() {
  return (
    <div>
      <div className="App">
        <CatDropDown />
      </div>
      <div className= "product">
        <Product />      
      </div>
    </div>
  );
}

export default HomePage;