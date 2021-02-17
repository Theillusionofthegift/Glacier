
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LogoBar from "./components/navbar/LogoBar";
import HomePage from './views/HomePage';
import ViewProductDetail from './components/viewProduct/ViewProductDetail'
import CreateProduct from './views/CreateProductDescription'
import MessageView from './views/MessageView'
import Profile from './views/Profile'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <LogoBar />
      <Switch>
        <Route path="/conversation/:id">
          <MessageView />
        </Route>
        <Route path="/product/:id">
          <ViewProductDetail />
        </Route>
        <Route path="/Sell">
          <CreateProduct />
        </Route>
        <Route path="/Profile">
        <Profile />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

