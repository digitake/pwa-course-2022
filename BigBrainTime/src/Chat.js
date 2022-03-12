import { useState } from 'react';
import App from './components/App.js';
import Chatbox from './components/Chatbox.js';
import Userlist from './components/Userlist.js';
import Inputbox from './components/Inputbox.js';
import './css/Chat.css';

function Chat() {
  const [chatData, setChatData] = useState([ //Array
    {user: "user1", msg: "Hello", position: "left"},
    {user: "user2", msg: "Hi", position: "right"},
    {user: "user1", msg: "How are you?", position: "left"},
    {user: "user2", msg: "I'm fine, thank you. And you?", position: "right"},
    {user: "user1", msg: "I'm so GOOD! Today.", position:"left"}
  ]);
  let userchat = "user1";

  return (
    <App>
      <div className="chat">
        <Userlist data={chatData}/>
        <Chatbox data={chatData}/>
        <Inputbox/>
        
      </div>
    </App>
  );
}

export default Chat;
