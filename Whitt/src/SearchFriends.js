import './SearchFriends.css';
import App from './components/App';
import Avatar from './components/Avatar';
import { useChatStateContext } from './context/FirebaseChatContextProvider';
import { Link } from 'react-router-dom';

function SearchFriends(){
  const { userList,imageDict } = useChatStateContext();

  return(
    <App>
      <div className="search-friends">
      {
        userList.map((item) => {
          return (
            <Link to={`/privatechat/${item.key}`} key={item.key}>
              <div className={`search-friends-item ${item.position}`}>
              <Avatar name={item.displayName} base64Image={imageDict[item.key]} /> 
                <div>{item.displayName}</div>
              </div>
            </Link>
          )
        })
      }
      </div>
    </App>
  )
}

export default SearchFriends;













{/*import { useState } from 'react';
import './SearchFriends.css';
import App from './components/App';
import Avatar from './components/Avatar';


function SearchFriends(){
  const [friends, setFriends] = useState([
    {user: "user1", displayName: "Porlapat"},
    {user: "user2", displayName: "Siwakorn"},
    {user: "user3", displayName: "ไอเฟม"},
    {user: "user4", displayName: "Thanatthron"},
    {user: "user5", displayName: "Jiraphat"},
    {user: "user6", displayName: "Punnaphop"},
    {user: "user7", displayName: "Napat"},
    {user: "user8", displayName: "Wissawa"},
    {user: "user9", displayName: "Warakul"},
    {user: "user10", displayName: "Owen"},
    {user: "user11", displayName: "Natchanon"},
    {user: "user12", displayName: "Jitwisut"},
    
  ]);

  return(
    <App>
      <div className="search-friends">
      {
         friends.map( x =>
          <div className='search-friends-item'>
           <Avatar name={x.user}/>
            {x.displayName}
          </div>
          )
       }
      </div>
    </App>
  )
}

export default SearchFriends;*/}