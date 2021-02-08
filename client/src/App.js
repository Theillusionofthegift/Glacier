import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LogoBar from "./components/navbar/LogoBar";
import LoginPage from './components/Login'
import HomePage from './views/HomePage';
import CreateProduct from './views/CreateProductDescription'
import MessageVeiw from './views/MessageView'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <LogoBar />
      <Switch>
      <Route path="/message">
        <MessageVeiw />
        </Route>
      <Route path="/Login">
          <LoginPage />
        </Route>
      <Route path="/Sell">
          <CreateProduct />
      </Route>
      <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;