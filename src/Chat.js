import { useState } from 'react';
import App from './components/App.js';
import Chatbox from './components/Chatbox.js';
import Userlist from './components/Userlist.js';
import Inputbox from './components/Inputbox.js';
import Tabprofile from './components/Tabprofile';
import './Chat.css';



function Chat() {
  const [chatData, setChatData] = useState([
    {user: "คุณหนู02", msg: "Hello", position: "left"},
    {user: "เหมียวซ่า", msg: "Hi", position: "right"},
    {user: "คุณหนู02", msg: "How are you?", position: "left"},
    {user: "เหมียวซ่า", msg: "I'm fine, thank you. And you?", position: "right"},
    {user: "เหมียวซ่า", msg: "Hey, Why are you ignoring me??", position: "right"},
    {user: "คุณหนู02", msg: "...", position: "left"},
    {user: "คุณหนู02", msg: "You're not even waiting for me to respond.", position: "left"},
  ]);

  return (
    <App>
      <div className="chat">
        <Tabprofile/>
        <Userlist/>
        <Chatbox data={chatData}/>
        <Inputbox/>
      </div>
    </App>
  );
}

export default Chat;
