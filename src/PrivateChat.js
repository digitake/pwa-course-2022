import { useEffect, useState } from 'react';
import App from './components/App.js';
import Chatbox from './components/Chatbox.js';
import Inputbox from './components/Inputbox.js';
import Titlebar from './components/Titlebar.js';
import './PrivateChat.css';
import { useChatStateContext } from './context/FirebaseChatContextProvider';
import { useParams } from "react-router-dom";

function PrivateChat() {
  const { uid } = useParams();
  const { getPrivateChat, getUserProfile, sendPrivateMsg } = useChatStateContext();
  const [ friendName, setFriendName ] = useState("");
  const [ chatData, setChatData ] = useState([]);

  useEffect(() => {
    getUserProfile(uid)
    .then(friend => {
      friend && setFriendName(friend.displayName);
      return friend;
    })
    .then(friend => {
      friend &&
      getPrivateChat(uid)
      .then(chatData => {
        if (chatData) {
          const mappedValues = Object.values(chatData.chat || []).map(item => ({
            ...item,
            key: item.timestamp || Date.now(),
            displayName: friend.displayName,
            position: item.position = item.user === uid ? "right" : "left"
          }))
          setChatData(mappedValues);
        }
      });
    })

    return () => {}
  }, [uid,getPrivateChat,getUserProfile]);

  return (
    <App>
      <div className="chat">
        <Titlebar value={friendName}/>
        <Chatbox data={chatData}/>
        <Inputbox onEnter={x=>sendPrivateMsg(x,uid)}/>
      </div>
    </App>
  );
}

export default PrivateChat;
