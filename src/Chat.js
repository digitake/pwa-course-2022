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
  const { sendMsg, listenToChatroom, listenToUserInChatroom } = useChatStateContext();
  const { authState } = useAuthStateContext();

  let [userlist, setUserlist] = useState({});

  let [chatData, setChatData] = useState([
    {user: "user1", msg: "Hello", position: "left", timestamp: 0},
    {user: "user2", msg: "Hi", position: "right", timestamp: 0},
    {user: "user1", msg: "How are you?", position: "left", timestamp: 0},
    {user: "user2", msg: "I'm fine, thank you. And you?", position: "right", timestamp: 0},
  ]);

  function onMsg(msg) {
    
    const mappedValue = {
      ...msg,
      key: msg.timestamp || Date.now(),
      position: msg.user === authState.user.uid ? "right" : "left"
    };
    
    setChatData(oldChat => [mappedValue, ...oldChat]);
  }

  function onUserUpdate(event, userKey, user) {
    setUserlist(oldUserlist => setUserlist({
      ...oldUserlist,
      userKey: user
    }));
    
    console.log(`user: ${event}`, userKey,user);
  }

  useEffect(() => {
    const unsubscribeChatroom = listenToChatroom('mainhall', onMsg);
    const unsubscribeUserListener = listenToUserInChatroom('mainhall', onUserUpdate);

    return () => {
      unsubscribeChatroom();
      unsubscribeUserListener();
    }
  }, []);


  return (
    <App>
      <Userlist />
      <div className="chat">
        <Titlebar value="Chat"/>        
        <Chatbox data={chatData.sort((a,b)=>a.timestamp - b.timestamp)}/>
        <Inputbox onEnter={x=>sendMsg(x,"mainhall")}/>
      </div>
    </App>
  );
}

export default Chat;
