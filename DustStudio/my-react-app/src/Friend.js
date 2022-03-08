import './Friend.css';
import TopNav from './components/TopNav';



function Friend(){
    return(

        <div>
            <TopNav></TopNav>
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