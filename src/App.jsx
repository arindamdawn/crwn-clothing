import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import HomePage from "./homepage.component";

const HatsPage = () => <div>HATS</div>;

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/hats' component={HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
