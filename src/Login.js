import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn= e =>{
      e.preventDefault();
      console.log("email-------->",email);
  }
  const register = e =>{
      e.preventDefault();
  }
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
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button 
          type="submit"
          className="login_signInbutton"
          onClick={signIn}
          >Sign-in</button>
          <p>
            By signing-in you agree to Amazon's clone Conditions of Use & Sale.
            Please see our Privacy Notice, our coockies Notice and our interest
            based Ads
          </p>
          <button
          type="submit" 
          className="login_registerbutton"
          onClick={register}>
          
            create your Amazon account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
