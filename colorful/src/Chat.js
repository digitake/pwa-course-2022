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
    {user: "user1", msg: "Hello", position: "left"},
    {user: "user2", msg: "Hi", position: "right"},
    {user: "user1", msg: "How are you?", position: "left"},
    {user: "user2", msg: "I'm fine, thank you. And you?", position: "right"},
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
      <Userlist />
      <div className="chat">
        <Titlebar value="Chat"/>        
        <Chatbox data={chatData}/>
        <Inputbox onEnter={x=>sendMsg(x,"mainhall")}/>
      </div>
    </App>
  );
}

export default Chat;
