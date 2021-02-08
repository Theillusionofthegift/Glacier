import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LogoBar from "./components/LogoBar";
import LoginPage from './components/Login'
import HomePage from './views/HomePage';
import CreateProductDescription from './views/CreateProductDescription'
import ViewProductDescription from './views/ViewProductDescription'
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
        <Route path="/CreateProductDescription">
          <CreateProductDescription />
        </Route>
        <Route path="/ViewProductDescription">
          <ViewProductDescription />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;