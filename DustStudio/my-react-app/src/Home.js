import './TopNav.css';
import './Menu.css';
import {openNav,closeNav} from './Menu';

function Home(){
    return(
        <div>
            <div id="mySidenav" class="sidenav">
                <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
                <a href="friend">Friends</a>
                <a href="#">Groups</a>
                <a href="profile">Profile</a>
                <a href="app">Contact</a>
            </div>
            <div class="topnav">
                <a onClick={openNav}>&#9776;</a>
                <b></b>
                <a class="active" href="/">Home</a>
                <a href="friend">Friends</a>
                <a href="group">Groups</a>
                <a href="profile">Profile</a>
            </div>   
        </div>
    )
}

export default Home;