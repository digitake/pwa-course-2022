import { useState } from 'react';
import App from './components/App.js';
import Chatbox from './components/Chatbox.js';
import Userlist from './components/Userlist.js';
import Inputbox from './components/Inputbox.js';
import './Chat.css';

function Chat() {
  const [chatData, setChatData] = useState([
    {user: "bob", msg: "Hello", position: "left"},
    {user: "pop", msg: "Hi", position: "right"},
    {user: "bob", msg: "How are you?", position: "left"},
    {user: "pop", msg: "I'm fine, thank you. And you?", position: "right"},
  ]);

  return (
    <App>
      <div className="chat">        
        <Chatbox data={chatData}/>
        <Inputbox/>
      </div>
    </App>
  );
}

export default Chat;