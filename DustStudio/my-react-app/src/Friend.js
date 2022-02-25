import './Friend'

function Friend(){
    return(
        <div>
           <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names.." title="Type in a name">
               <ul id="myUL">
                   <li><a href="#">Adele</a></li>
                   <li><a href="#">Agnes</a></li>
                   <li><a href="#">Billy</a></li>
                   <li><a href="#">Bob</a></li>
                   <li><a href="#">Calvin</a></li>
                   <li><a href="#">Christina</a></li>
                   <li><a href="#">Cindy</a></li>
                   </ul>
                   </input>
        </div>
        
    )
}

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


export default Friend;