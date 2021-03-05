import React from "react";
import "./App.scss";

import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import People from "./components/People/People";
import Home from "./components/Home/Home";
import CharacterDetails from "./components/People/CharacterDetails/CharacterDetails";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Switch>
          <Route path="/people" exact component={People} />
          <Route path="/people/:id" component={CharacterDetails} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
