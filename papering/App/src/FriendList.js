import { useState } from 'react';
import './FriendList.css';
import App from './components/App';
import Avatar from './components/Avatar';
import Topbar from './components/Topbar';

function FriendList(){
  const [friends, setFriends] = useState([
    {user: "user1", displayName: "Kuroro", status: "Boring."},
    {user: "user2", displayName: "Kirua", status: "Happy mood."},
    {user: "user3", displayName: "Gon", status: "Keep it up!"},
    {user: "user4", displayName: "Palm", status: "Stay cool."},
  ]);

  return(
    <App>
      <div className="topbar">
        Friends
      </div>
      <div className="friend-list">
        
       {friends.map(x =>
       <div className='friend-list-item'>
         <div>{friends.user}</div>  
            <Avatar name={x.user}/>
            {x.Avatar} 
            <div className='friend-name-space'>
            {x.displayName} <br/> 
            <div className='friend-status'>
            {x.status}
            </div>  
         </div>  
       </div>
         
       )
       }
      
      </div>
    </App>
  )
}

export default FriendList;