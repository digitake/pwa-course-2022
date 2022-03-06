import './Friend.css'




function Friend(){
    return(
        <div>
            <input type="text" id="mySearch" onkeyup="Friend()" placeholder="Search.." title="Type in a friend"></input>
               <ul id="myUL">
                   <li><a href="#1">Friend1</a></li>
                   <li><a href="#2">Friend2</a></li>
                   <li><a href="#3">Friend3</a></li>
                   <li><a href="#4">Friend4</a></li>
                   <li><a href="#5">Friend5</a></li>
                   <li><a href="#6">Friend6</a></li>
                   <li><a href="#7">Friend7</a></li>
                   <li><a href="#8">Friend8</a></li>
                   <li><a href="#9">Friend9</a></li>
                   <li><a href="#10">Friend10</a></li>
                   <li><a href="#11">Friend11</a></li>
                   <li><a href="#12">Friend12</a></li>
                </ul>  
        </div>
    )
 
}


export default Friend;