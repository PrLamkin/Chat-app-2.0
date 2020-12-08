import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase"

function Login () {

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then(result => {
                console.log(result);
            })
            .catch ((error) => {
                alert(error.message);
            })
    }

    return <div className="login">
        <div className="login_container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTuBH6VsFepjszgDInG2ZtEAeBb-ybJLBpXQ&usqp=CAU" alt="car"> 
          </img>
          <h1>Sign in to AllaboutCars.com</h1>
          <p>AllaboutCars.com</p>
          <Button onClick={signIn}>Sign In with Google</Button>
        </div>
    </div>;
}

export default Login