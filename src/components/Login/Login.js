import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";

function Login () {
    return <div className="login">
        <div className="login_container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTuBH6VsFepjszgDInG2ZtEAeBb-ybJLBpXQ&usqp=CAU" alt="car"> 
          </img>
          <h1>Sign in to AllaboutCars.com</h1>
          <p>AllaboutCars.com</p>
          <Button>Sign In with Google</Button>
        </div>
    </div>;
}

export default Login