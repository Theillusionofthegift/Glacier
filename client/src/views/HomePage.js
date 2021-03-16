import './HomePage.css';
import CatDropDown from '../components/navbar/DropDown'
import ProductProvider from '../components/products/ProductProvider'
import { Container } from 'react-bootstrap'
import MessageIcon from '../components/messages/MessageIcon'

function HomePage() {
  return (
    <>
      <CatDropDown />
      <MessageIcon />
      <Container className="mt-5">
        <ProductProvider />
      </Container>
      
    </>
  );
}

export default HomePage;