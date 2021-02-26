import logo from './logo.svg';
import React, { useEffect } from 'react'
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import { auth } from './firebase';
import { useStateValue } from './Components/StateProvider';
import Payment from './Components/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Components/Orders';

const promise = loadStripe(
  'pk_test_51IGbEIJC2nppETteTroh1C6RlavplKJc9nOsHlWgqCc2KXiINXmKUQA9ZkgiauEddLJWD6P0BJa683aH6JUsF4nk002ynIOM9m'
  );

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
   // will only run once when the app component loads...

   auth.onAuthStateChanged(authUser => {
     console.log('THE USER IS >>>', authUser);
     
     if (authUser) {
       // the user just logged in / the user was logged in

      dispatch({
        type: 'SET_USER',
        user: authUser
      })
     }else {
       // the user is logged out
       dispatch({
         type: 'SET_USER',
         user: null
       })
     }
   })
  }, [])

  return (
    // BBM
    <Router>
    <div className="app">
      <Switch>
        <Route path="/orders">
          <Header />
           <Orders/>
        </Route>
        <Route path="/login">
           <Login/>
        </Route>
       <Route path="/checkout">
           <Header />
           <Checkout />
        </Route>

        <Route path="/payment">
           <Header />
           <Elements stripe={promise}>
              <Payment />
           </Elements>
        </Route>

        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>     
    </div>
    </Router>
  );
}

export default App;
