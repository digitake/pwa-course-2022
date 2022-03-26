import { useState } from 'react';
import './FriendList.css';
import App from './components/App.js';
import Avatar from './components/Avatar.js';
import { Link } from 'react-router-dom';


function FriendList(){
  const [friends, setFriends] = useState([
    {user: "Liew", displayName: "Liew"},
    {user: "Hack", displayName: "Hack"},
  ])

  return(
    <App>
      <div className="friend-list">
      
       {
        friends.map (x=>
          <Link to="/chat" className='friend-list-item'>
          <Avatar name={x.user}/> 
          <div className="friend-list-item-text">
            {x.displayName} </div>
            </Link>   
         
               

       )
    }
      </div>
    </App>
  )
}

export default FriendList;