import './HomePage.css';
import CatDropDown from '../components/navbar/DropDown'
import ProductProvider from '../components/products/ProductProvider'
import { Container } from 'react-bootstrap'
import MessageIcon from '../components/messages/MessageIcon'

function HomePage() {
  return (
    <>
      <CatDropDown />
      <Container style={{ margin: "auto"}} fluid>
        <ProductProvider />
      </Container>
      <MessageIcon />
    </>
  );
}

export default HomePage;