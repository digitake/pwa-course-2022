import { useState } from 'react';
import './FriendList.css';
import App from './components/App';
import Avatar from './components/Avatar';

function FriendList(){
  const [friends, setFriends] = useState([
    {user: "pop", displayName: "Pop"},
    {user: "bob", displayName: "Bob"},
    {user: "bab", displayName: "Bab"},
    {user: "peter", displayName: "Peter"},
  ]);

  return(
    <App>
      <div className="friend-list">
        {
          friends.map ( x =>
              <div className='friend-list-item'>
                <Avatar name={x.user}/> 
                {x.displayName}                                              
              </div>
            )          
        }        
      </div>
    </App>
  )
}

export default FriendList;