
import React from "react";
import {Switch, Route } from "react-router-dom";
import LogoBar from "./components/navbar/LogoBar";
import HomePage from './views/HomePage';
import Profile from './views/Profile';
import ViewProductDetail from './components/viewProduct/ViewProductDetail'
import CreateProduct from './views/CreateProductDescription'
import MessageView from './views/MessageView'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
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
      </>
  );
}

export default App;

