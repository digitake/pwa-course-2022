import '../css/TopNav.css';
import '../css/Menu.css';
import { useLocation } from "react-router-dom";
import {openNav,closeNav} from './Menu';

function TopNav(){
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    return(
        <div>
            <div id="mySidenav" class="sidenav">
                <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
                <a href="friend">Friends</a>
                <a href="#">Groups</a>
                <a href="profile">Profile</a>
                <a href="app">Contact</a>
            </div>
            <div id="overlay"></div>
            <div id="myTopnav" class="topnav">
                <a onClick={openNav}>&#9776;</a>
                <b></b>
                <a className={splitLocation[1] === "" ? "active" : ""} href = '/'>Home</a>
                <a className={splitLocation[1] === "friend" ? "active" : ""} href = "/friend">Friends</a>
                <a className={splitLocation[1] === "group" ? "active" : ""} href = "/group">Groups</a>
            </div>   
        </div>
        
    )
    
}


export default TopNav;