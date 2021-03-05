import React from "react";
import "./App.scss";

import { Route, Switch } from "react-router-dom";
import People from "./components/People/People";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="app container">
      <Switch>
        <Route path="/people" component={People} />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
