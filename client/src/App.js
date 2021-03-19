
import React from "react";
import { Switch, Route } from "react-router-dom";
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
import AdminVeiw from './views/AdminView'
import LockedComponent from './components/lock/LockedComponet'
import LockedPage from './components/lock/LockedPage'

function App() {
  return (
    <>
      <LogoBar />
      <Switch>
        <Route path="/locked">
          <LockedPage />
        </Route>
        <Route path="/admin">
          <AdminVeiw />
        </Route>
        <Route path="/?search">
          <SearchView />
        </Route>
        <Route path="/conversations/all">
          <LockedComponent >
            <ConversationView />
          </LockedComponent>
        </Route>
        <Route path="/conversations/:id">
          <LockedComponent >
            <MessageView />
          </LockedComponent>
        </Route>
        <Route path="/product/:id">
          <LockedComponent >
            <ViewProductDetail />
          </LockedComponent>
        </Route>
        <Route path="/sell">
          <LockedComponent >
            <CreateProduct />
          </LockedComponent>
        </Route>
        <Route path="/users/new">
          <LockedComponent >
            <ProfileCreate />
          </LockedComponent>
        </Route>
        <Route path="/users/update">
          <LockedComponent >
            <ProfileUpdate />
          </LockedComponent>
        </Route>
        <Route path="/profile">
          <LockedComponent >
            <ProfileView />
          </LockedComponent>
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>


    </>

  );
}

export default App;

