
import React from "react";
import {Switch, Route } from "react-router-dom";
import LogoBar from "./components/navbar/LogoBar";
import HomePage from './views/HomePage';
import ViewProductDetail from './components/viewProduct/ViewProductDetail'
import CreateProduct from './views/CreateProductDescription'
import MessageView from './views/MessageView'
import ProfileCreate from './views/ProfileCreate'
import ProfileUpdate from './views/ProfileUpdate'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileView from "./views/ProfileView";
import ConversationView from "./views/ConversationView";
import SearchView from './views/SearchView'


function App() {
  return (
    <>
      <LogoBar />
      <Switch>
        <Route path="/?search">
          <SearchView />
        </Route>
        <Route path="/conversations/all">
          <ConversationView />
        </Route>
        <Route path="/conversations/:id">
          <MessageView />
        </Route>
        <Route path="/conversations/">
          <MessageView />
        </Route>
        <Route path="/product/:id">
          <ViewProductDetail />
        </Route>
        <Route path="/sell">
          <CreateProduct />
        </Route>
        <Route path="/users/new">
          <ProfileCreate />
        </Route>
        <Route path="/users/update">
          <ProfileUpdate />
        </Route>
        <Route path="/profile">
          <ProfileView />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
   

      </>

  );
}

export default App;

