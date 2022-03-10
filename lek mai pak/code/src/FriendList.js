import { useState } from 'react';
import './FriendList.css';
import App from './components/App';
import Avatar from './components/Avatar';
import SearchBox from './components/Searchbox';

function FriendList(){
  const [friends, setFriends] = useState([
    {user: "pop", displayName: "pop", msg: "hi"},
    {user: "bob", displayName: "bob", msg: "Hello"},
    {user: "bab", displayName: "bab", msg: "Yo!"},
    {user: "peter", displayName: "peter", msg: "Whatsup!"},
  ]);

  return(
    <App><SearchBox/>
      <div className="friend-list">        
        {
          friends.map ( x =>
              <div className='friend-list-item'>
                <Avatar name={x.user}/> 
                 <div className='text'>
                  <div classname= 'username'>  
                    {x.displayName}<br/>
                  </div>  
                    {x.msg}
                  </div>
              </div>
            )
        }        
      </div>
    </App>
  )
}

export default FriendList;