import './SignIn.css';
import React from "react";
import {auth, provider} from "./firebase/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function SignIn({ setIsAuth }){

    let navigate = useNavigate();
    

    const signInWithGoogle = () => {
      signInWithPopup(auth, provider).then((result) => {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        navigate("/");
      });
    };
    return(
      
        <div className="loginPage" style={{backgroundImage: "url(/Bg.jpg)" }}>
         <a></a>
        <img className='img' src = "Icon.png"></img>
        <a></a>
        <button className="login-with-google-btn" onClick={signInWithGoogle}>
          Sign in with Google
        </button>
        </div>
    );
}

export default SignIn;