import { useState } from 'react';
import './FriendList.css';
import App from './components/App';
import Avatar from './components/Avatar';

function FriendList(){
  const [friends, setFriends] = useState([
    {user: "user1", displayName: "Weko eowk"},
    {user: "user2", displayName: "kar sodk"},
    {user: "user3", displayName: "Nattan Lowa"},
    {user: "user4", displayName: "Super idol"},
  ]);
  return(
    <App>
<div className="friend-list">
       {
         friends.map( x=>
          <div className='friend-list-item'>
            <Avatar name={x.user}/>
            <div className='name'>
            {x.displayName}
          </div>
          </div>
          )
       }
       
      </div>
    </App>
  )
}
export default FriendList;