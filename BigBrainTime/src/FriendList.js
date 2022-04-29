import { useState } from 'react';
import './FriendList.css';
import App from './components/App';
import Avatar from './components/Avatar';
import { useChatStateContext } from './context/FirebaseChatContextProvider';
import { Link } from 'react-router-dom';
import { useAuthStateContext } from './context/FirebaseAuthContextProvider';

function FriendList(){
  const { userList, imageDict, userDict } = useChatStateContext();
  const { authState } = useAuthStateContext();

  function showPics(item){
    let displayName = "ไม่ทราบชื่อ(Offline)";
    if (item.user in userDict && userDict[item.user].displayName){
      displayName = userDict[item.user].displayName;
    } else if (item.user === authState.user.uid) {
      displayName = authState.user.displayName;
    }
    
    return ({
      ...item,
      key: item.timestamp || Date.now(),
      displayName: displayName,
      image: imageDict[item.user] || "",
    });
  }

  const [favorite, setFavorite] = useState([
    {user: "user1", displayName: "ไอ้ปื้ด"},
    {user: "user2", displayName: "นางสาวสุดา"},
    {user: "user3", displayName: "พลทหารหนึ่ง"},
    
  ]);

  return(
    <App>
      <div className="friend-list">
      <div className="friend-icon">Favorite</div>
      
      <div className="favorite">
      {
        favorite.map( x=>
        <div className="favorite-friend">
          <Avatar name={x.user}/>{x.displayName}
        </div>)
      }
      </div>

       <div className="friend-icon">Friends</div>
       {
         userList.map((item) => {
          return (
            <Link to={`/privatechat/${item.key}`} key={item.key}>
              <div className={`friend-list-item ${item.position}`}>
                <Avatar name={item.displayName}/>
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

export default FriendList;