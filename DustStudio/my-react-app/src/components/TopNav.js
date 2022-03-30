import '../css/TopNav.css';
import '../css/Menu.css';
import { useLocation } from "react-router-dom";
import {openNav,closeNav} from './Menu';
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useState } from "react";


function TopNav(){
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    
    const signUserOut = () => {
        signOut(auth).then(() => {
          localStorage.clear();
          setIsAuth(false);
          window.location.pathname = "/";
        });
      };

    return(
        <div>
            <div id="mySidenav" class="sidenav">
                <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
                <a href="/">Home</a>
                <a href="/friend-list">Friends</a>
                <a href="/group">Groups</a>
                <a href="/profile">Profile</a>
 
            </div>
            <div id="overlay"></div>
            <div id="myTopnav" class="topnav">
                <icon onClick={openNav}>&#9776;</icon>
                <c></c>
                <a className={splitLocation[1] === "" ? "active" : ""} href = '/'>Home</a>
                <a className={splitLocation[1] === "friend-list" ? "active" : ""} href = "/friend-list">Friends</a>
                <a className={splitLocation[1] === "group" ? "active" : ""} href = "/group">Groups</a>
                <a className={splitLocation[1] === "profile" ? "active" : ""} href = "/profile">Profile</a>
                <b onClick={signUserOut}>Sign out</b>
            </div>   
        </div>
        
    )
    
}


export default TopNav;