import React ,{useEffect} from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login'
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const[{currentUser},dispatch]=useStateValue();
  useEffect(()=>{
    //will only run once when the component loads
     auth.onAuthStateChanged(authUser=>{
       if(authUser){
         console.log("this is the user ",authUser.email);
         dispatch({
          type:"GET_LOGGED_USER",
            payload:{
              user:authUser.email
            }
          })

       }else{
         console.log(" no user is logged")
        dispatch({
          type:"GET_LOGGED_USER",
            payload:{
              user:null
            }
          })
       }
     })
  },[])
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
