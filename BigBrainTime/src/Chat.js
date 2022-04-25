import { useEffect, useState } from 'react';
import App from './components/App.js';
import Chatbox from './components/Chatbox.js';
import Titlebar from './components/Titlebar.js';
import Userlist from './components/Userlist.js';
import Inputbox from './components/Inputbox.js';
import './Chat.css';
import { useChatStateContext } from './context/FirebaseChatContextProvider';
import { useAuthStateContext } from './context/FirebaseAuthContextProvider';

function Chat() {
  const { sendMsg, listenToChatroom, imageDict, userDict } = useChatStateContext();
  const { authState } = useAuthStateContext();

  const [chatData, setChatData] = useState([]);

  /*const [chatData, setChatData] = useState([ //Array
    {user: "user1", msg: "Hello", position: "left"},
    {user: "user2", msg: "Hi", position: "right"},
    {user: "user1", msg: "How are you?", position: "left"},
    {user: "user2", msg: "I'm fine, thank you. And you?", position: "right"},
    {user: "user1", msg: "I'm so GOOD! Today.", position:"left"}
  ]);*/

  function onMsg(msg) {
    setChatData(oldChat => [msg, ...oldChat]);
  }

  function transformChatData(item) {
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
      <div className="chat">
        <Titlebar value="Public Chat"/>
        <Userlist data={chatData}/>
        <Chatbox data={chatData.map(transformChatData).sort((a,b)=>a.timestamp - b.timestamp)}/>
        <Inputbox onEnter={x=>sendMsg(x,"mainhall")}/>
        
      </div>
    </App>
  );
}

export default Chat;
