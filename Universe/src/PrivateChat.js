import { useEffect, useState } from 'react';
import App from './components/App.js';
import Chatbox from './components/Chatbox.js';
import Inputbox from './components/Inputbox.js';
import './Chat.css';
import { useChatStateContext } from './context/FirebaseChatContextProvider';
import { useParams } from "react-router-dom";

function PrivateChat() {
  const { uid } = useParams();
  const { getUserProfile, sendPrivateMsg, listenToPrivateChat } = useChatStateContext();
  const [ friendName, setFriendName ] = useState("");
  const [ chatData, setChatData ] = useState([]);
  const { sendMsg, listenToChatroom, imageDict, userDict } = useChatStateContext();

  const onMsg = (msg) => {
    
    const mappedValue = {
      ...msg,
      key: msg.timestamp || Date.now(),
      displayName: friendName,
      image: imageDict[msg.user] || "",
      position: msg.user === uid ? "left" : "right"
    };
    
    setChatData(oldChat => [mappedValue, ...oldChat]);
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
      <div className="center">
      <div className="chatbox ">
        <Chatbox data={chatData}/>
        
      </div>
      <Inputbox onEnter={x=>sendPrivateMsg(x,uid)}/>
      </div>
    </App>
  );
}

export default PrivateChat;
