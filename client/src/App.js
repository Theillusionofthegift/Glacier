import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LogoBar from "./components/LogoBar";
import LoginPage from './components/Login'
import HomePage from './views/HomePage';
import ViewProductPage from './views/ViewProductPage'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <LogoBar />
      <Switch>
      <Route path="/Signup">

        </Route>
        <Route path="/Login">
          <LoginPage />
        </Route>
        <Route path="/product/:id">
          <ViewProductPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;