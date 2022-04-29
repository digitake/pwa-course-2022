import { useEffect, useState } from 'react';
import App from './components/App.js';
import Chatbox from './components/Chatbox.js';
import Inputbox from './components/Inputbox.js';
import Titlebar from './components/Titlebar.js';
import './Chat.css';
import Option from './components/Option.js';
import { useChatStateContext } from './context/FirebaseChatContextProvider';
import { useParams } from "react-router-dom";
import { useAuthStateContext } from './context/FirebaseAuthContextProvider';

function PrivateChat() {
  const { uid } = useParams();
  const { getUserProfile, sendPrivateMsg, listenToPrivateChat, imageDict, userDict } = useChatStateContext();
  const [ friendName, setFriendName ] = useState("");
  const [ chatData, setChatData ] = useState([]);
  const { authState } = useAuthStateContext();

  const onMsg = (msg) => {
    
    const mappedValue = {
      ...msg,
      key: msg.timestamp || Date.now(),
      displayName: friendName,
      position: msg.user === uid ? "right" : "left"
    };
    
    setChatData(oldChat => [mappedValue, ...oldChat]);
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
    getUserProfile(uid)
    .then(friend => {
      friend && setFriendName(friend.displayName);
      return friend;
    })

    const unsubscribePrivateChat = listenToPrivateChat(uid, onMsg);

    return () => {unsubscribePrivateChat()}
  }, [uid]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <App>
      <div className="chat">
        <Titlebar value={friendName}/>
        <Chatbox data={chatData.map(transformChatData).sort((a,b)=>a.timestamp - b.timestamp)}/>
        <Option/>
        <Inputbox onEnter={x=>sendPrivateMsg(x,uid)}/>
      </div>
    </App>
  );
}

export default PrivateChat;