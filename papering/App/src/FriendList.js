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
    {user: "user4", displayName: "Palm", status: "Stay cool.", time: "11.10 AM"},
  ]);

  const [groups, setGroups] = useState([
    {groupId: "Group1", groupName: "GI472"},
  ]);


  return(
    <App>
      <Topbar title="Friends"/>
      <div>Friends 3</div>
      <div className="friend-list">
        
       {friends.map(x =>
       <div className='friend-list-item'>
         <div>{friends.user}</div>  
            <Avatar name={x.user}/>
            {x.Avatar} 
            <div className='friend-name-space'>
              {x.displayName} {x.time}
            <br/>
            <div className='friend-status'>
            {x.status}
            </div>
         </div>  
       </div>
         
       )
       }
       <div>Groups 1 </div>  
       {groups.map(x =>
       <div className='group-list-item'>
        
            <Avatar name={x.groupId}/>
            <div className='group-name-space'> {x.groupName} </div>
            <div className='group-status'> {x.status} </div>
          
        </div>  
       
         
       )
       }
      
      </div>
    </App>
  )
}

export default FriendList;