import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/hompage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import {auth} from './firebase/firebase.utils';


class App extends React.Component{
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  //avoids memory leaks when unmounts
  unsubscribeFromAuth = null

  componentDidMount(){
    //method in auth lib takes function where params is what user state is
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser:user});

      console.log(user);
    });
  }

  //closes subscription
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route exact path='/shop' element={<ShopPage/>} />
          <Route exact path='/signin' element={<SignInAndSignUpPage/>} />
        </Routes>
        
      </div>
      );
    }
}

export default App;
