import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import {auth} from './firebase/firebase.utils';
//to save the state of the user in the app, we are using a class component. 

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
      }
  }

  unsubscribteFromAuth = null

  componentDidMount(){
    this.unsubscribteFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser : user});
      console.log(user);
    })
  }
componentWillUnmount(){
  this.unsubscribteFromAuth();
}

  render(){
  return (
    <div className="App">
      <Header currentUser={this.state.currentUser}/>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signIn' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
  }
}

export default App;
