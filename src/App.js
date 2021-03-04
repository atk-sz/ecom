import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header-component/header.component'
import Sign from './pages/sign/sign.component'

import { Route, Switch } from "react-router-dom";
import { auth, createUser } from './firebase/firebase';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUser(userAuth);
        userRef.onSnapshot(sSObj => {
          this.setState({
            currentUser: {
              id: sSObj.id,
              ...sSObj.data()
            }
          })
          // console.log(this.state)
        })
      } else {
        this.setState({ currentUser: null })
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/sign' component={Sign} />
        </Switch>
      </div>
    )
  }
}

export default App;
