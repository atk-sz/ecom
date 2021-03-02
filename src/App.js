import React from 'react';
import './App.css';
import HomePage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shoppage/shoppage.component';
import Header from './components/header-component/header.component'

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
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop/:hats' component={hat} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  )
}

export default App;
