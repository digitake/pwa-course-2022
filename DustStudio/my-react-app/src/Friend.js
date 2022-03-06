import './Friend.css';
import './TopNav.css';
import './Menu.css';
import {openNav,closeNav} from './Menu';



function Friend(){
    return(

        <div>
            <div id="mySidenav" class="sidenav">
                <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
                <a href="friend">Friends</a>
                <a href="#">Groups</a>
                <a href="#">Profile</a>
                <a href="#">Contact</a>
            </div>
            <div class="topnav">
                <a onClick={openNav}>&#9776;</a>
                <b></b>
                <a href="/">Home</a>
                <a class="active" href="friend">Friends</a>
                <a href="group">Groups</a>
                <a href="profile">Profile</a>
            </div>   

                    
            <div class="row">
                <div class="left">
                    <input type="text" id="mySearch" onKeyUp={myFunction} placeholder="Search.." title="Type in a category"></input>
                     <ul id="myFriends">
                         <li><a href="#">Friend1</a></li>
                         <li><a href="#">Friend2</a></li>
                         <li><a href="#">Friend3</a></li>
                         <li><a href="#">Friend4</a></li>
                         <li><a href="#">Friend5</a></li>
                         <li><a href="#">Friend6</a></li>
                         <li><a href="#">Friend7</a></li>
                         <li><a href="#">Friend8</a></li>
                         <li><a href="#">Friend9</a></li>
                </ul>
                </div>
                <div class="right">
                    <h2>Your Friends</h2>
                </div>
            </div>
        </div>
    )
 
}
function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myFriends");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }


export default Friend;