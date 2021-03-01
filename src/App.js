import React from 'react';
import './App.css';
import HomePage from "./components/pages/homepage.component";

import { Route, Switch } from "react-router-dom";


const hat = (props) => {
  console.log(props)
  return <div>
    <h1>Ohk {props.match.params.hats}</h1>
  </div>
}
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop/:hats' component={hat} />
      </Switch>
    </div>
  )
}

export default App;
