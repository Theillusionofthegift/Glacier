import './HomePage.css';
import CatDropDown from '../components/navbar/DropDown'
import ProductProvider from '../components/products/ProductProvider'

function HomePage() {
  return (
    <div>
      <div className="App">
        <CatDropDown />
      </div>
      <div className= "product">
        <ProductProvider />      
      </div>
    </div>
  );
}

export default HomePage;