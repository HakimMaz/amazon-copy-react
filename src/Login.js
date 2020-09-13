import React from 'react'
import './Login.css'
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="login">
        <Link to="/">
        <img
        className="login_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
         />
        </Link>
        <div className="login_container">
           <h1>Sign-in</h1>
           <form>
           <h5>Email</h5>
           <input type="text"/>
           <h5>Password</h5>
           <input type="password"/>
           <button className="login_signInbutton">Sign-in</button>
           <p> 
              By signing-in you agree to Amazon's clone  Conditions of Use
              & Sale. Please see our Privacy Notice, our coockies Notice
              and our interest based Ads 

           </p> 
           <button className="login_registerbutton"> create your Amazon account</button>
           </form>
        </div>
        
        </div> 
    )
}

export default Login
