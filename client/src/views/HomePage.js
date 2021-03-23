import CatDropDown from '../components/navbar/DropDown'
import ProductProvider from '../components/products/ProductProvider'
import { Container } from 'react-bootstrap'
import MessageIcon from '../components/messages/MessageIcon'

function HomePage() {
  return (
    <>
      <CatDropDown />
      <MessageIcon />
      <Container style={{ marginTop: "5em" }}>
        <ProductProvider />
      </Container>

    </>
  );
}

export default HomePage;