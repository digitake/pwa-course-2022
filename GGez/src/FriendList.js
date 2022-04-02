import './FriendList.css';
import App from './components/App';
import Avatar from './components/Avatar';
import { useChatStateContext } from './context/FirebaseChatContextProvider';
import { Link } from 'react-router-dom';

function FriendList(){
  const { userList } = useChatStateContext();

  return(
    <App>
      <div className="friendList">
        <h1>Friend List</h1>
        <ul class="flist clearfix">
      {
        userList.map((item) => {
          return (
            <li>
            <div className="fbox">
               <Link to={`/friend/${item.key}`} key={item.key}>
               <Avatar name={item.displayName}/>
               </Link>
               <div className="dpNm">{item.displayName}</div>
                <div className="fbtncover">
                        <a href="javascript:void(0);" className="fibtn"><i className="fa fa-phone"></i><span>Call</span></a>
                        <Link to={`/privatechat/${item.key}`} key={item.key} className= "fibtn">
                        <i className="fa fa-comments"></i><span>Chat</span>
                        </Link>
                        <a href="javascript:void(0);" className="fibtn"><i className="fa fa-ban"></i><span>Block</span></a>
                </div>
            </div>
            </li> 
          )
        })
      }
      </ul>
      </div>
    </App>
    
  )
}

export default FriendList;

/* <App>
      <div className="friend-list">
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
    </App> */