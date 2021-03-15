import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header-component/header.component'
import Sign from './pages/sign/sign.component'

import { Route, Switch, Redirect } from "react-router-dom";
import { auth, createUser } from './firebase/firebase';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions'


class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUser(userAuth);
        userRef.onSnapshot(sSObj => {
          setCurrentUser({
            id: sSObj.id,
            ...sSObj.data()
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/sign' render={
            ()=>{
              return this.props.currentUser?(<Redirect to='/' />):(<Sign/>)
            }
          } />
        </Switch>
      </div>
    )
  }
}
const mapStateToProps = ({user})=>({
  currentUser: user.currentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
