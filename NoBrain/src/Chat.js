<<<<<<< HEAD
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
  const { sendMsg, listenToChatroom } = useChatStateContext();
  const { authState } = useAuthStateContext();

  let [chatData, setChatData] = useState([
=======
import { useState } from 'react';
import App from './components/App.js';
import Chatbox from './components/Chatbox.js';
import Userlist from './components/Userlist.js';
import Inputbox from './components/Inputbox.js';
import MiniAvatar from './components/MiniAvatar.js';
import './Chat.css';

function Chat() {
  const [chatData, setChatData] = useState([
>>>>>>> eb394efbc6782808612de935bf05a22154bf08f8
    {user: "user1", msg: "Hello", position: "left"},
    {user: "user2", msg: "Hi", position: "right"},
    {user: "user1", msg: "How are you?", position: "left"},
    {user: "user2", msg: "I'm fine, thank you. And you?", position: "right"},
<<<<<<< HEAD
  ]);

  const onMsg = (msg) => {
    
    const mappedValue = {
      ...msg,
      key: msg.timestamp || Date.now(),
      position: msg.user === authState.user.uid ? "right" : "left"
    };
    
    setChatData(oldChat => [mappedValue, ...oldChat]);
  }

  useEffect(() => {
    const unsubscribePrivateChat = listenToChatroom('mainhall', onMsg);

    return () => {unsubscribePrivateChat()}
  }, []);


  return (
    <App>
      <div className="chat">
        <Titlebar value="Chat"/>        
        <Chatbox data={chatData}/>
        <Inputbox onEnter={x=>sendMsg(x,"mainhall")}/>
=======
    {user: "user1", msg: "I'm fine, thank you.", position: "left"},
  ]);

  return (
    <App>
      <div className="chat"><div className='userbox'><MiniAvatar name={"user1"}/> user1</div>  
        <Chatbox data={chatData}/>
        <Inputbox/>
>>>>>>> eb394efbc6782808612de935bf05a22154bf08f8
      </div>
    </App>
  );
}

export default Chat;
