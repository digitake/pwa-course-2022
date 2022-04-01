import { useEffect, useState } from 'react';
import App from './components/App.js';
import Chatbox from './components/Chatbox.js';
import Titlebar from './components/Titlebar.js';
import Inputbox from './components/Inputbox.js';
import './Chat.css';
import FriendList from './FriendList.js';
import { useChatStateContext } from './context/FirebaseChatContextProvider';
import { useAuthStateContext } from './context/FirebaseAuthContextProvider';
import Tabbar from './components/Tabbar.js';

function Chat() {
  const { userList, sendMsg, listenToChatroom } = useChatStateContext();
  const { authState } = useAuthStateContext();
  const [chatData, setChatData] = useState([]);
  const [usersDict, setUsersDict] = useState({});

  function userListToDict(userList) {
    return userList.reduce((dict, item) => {
      dict[item.key] = item;
      return dict;
    }, {});
  }

  useEffect(() => {
    const x = userListToDict(userList);
    setUsersDict(_=>x);
  },[userList])

  function onMsg(msg) {
    setChatData(oldChat => [msg, ...oldChat]);
  }

  function transformChatData(item) {
    let displayName = "ไม่ทราบชื่อ(Offline)";
    if (item.user in usersDict && usersDict[item.user].displayName){
      displayName = usersDict[item.user].displayName;
    } else if (item.user === authState.user.uid) {
      displayName = authState.user.displayName;
    }
    return ({
      ...item,
      key: item.timestamp || Date.now(),
      displayName: displayName,
      position: item.user === authState.user.uid ? "right" : "left"
    });
  }

  useEffect(() => {
    const unsubscribeChatroom = listenToChatroom('mainhall', onMsg);

    return () => {
      unsubscribeChatroom();
    }
  }, []);



  return (
    <App>
      <FriendList />
      <div className="chat">
        <Titlebar value="Group Chat"/>        
        <Chatbox data={chatData.map(transformChatData).sort((a,b)=>a.timestamp - b.timestamp)}/>
        <Inputbox onEnter={x=>sendMsg(x,"mainhall")}/>
      </div>
      <Tabbar/>
    </App>
  );
}

export default Chat;
