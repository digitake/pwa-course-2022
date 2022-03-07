import { useState } from 'react';
import App from './components/App.js';
import Chatbox from './components/Chatbox.js';
import Userlist from './components/Userlist.js';
import Inputbox from './components/Inputbox.js';
import './Chat.css';
import { useAuthStateContext } from './context/FirebaseAuthContextProvider';

function Chat() {
  const { authState } = useAuthStateContext();

  let [chatData, setChatData] = useState([
    {user: "user1", msg: "Hello", position: "left"},
    {user: "user2", msg: "Hi", position: "right"},
    {user: "user1", msg: "How are you?", position: "left"},
    {user: "user2", msg: "I'm fine, thank you. And you?", position: "right"},
  ]);

  return (
    <App>
      <div className="chat">
        <Userlist/>
        <Chatbox data={chatData}/>
        <Inputbox/>
      </div>
    </App>
  );
}

export default Chat;
