
import React from "react";
import {Switch, Route } from "react-router-dom";
import LogoBar from "./components/navbar/LogoBar";
import HomePage from './views/HomePage';
import ProfileCreate from './views/ProfileCreate';
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
        <Route path='/users/new'>
          <ProfileCreate />
        </Route>
        <Route path="/Profile">
          <>User Profile</>
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      </>
  );
}

export default App;

