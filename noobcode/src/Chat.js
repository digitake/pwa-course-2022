import { useState } from 'react';
import App from './components/App.js';
import Chatbox from './components/Chatbox.js';
import Userlist from './components/Userlist.js';
import Inputbox from './components/Inputbox.js';
import './Chat.css';

function Chat() {
  const [chatData, setChatData] = useState([
    {user: "John", msg: "ไง", position: "left"},
    {user: "ฉัน", msg: "ว่า", position: "right"},
    {user: "John", msg: "เป็นไงบ้าง", position: "left"},
    {user: "ฉัน", msg: "สบายดี", position: "right"},
  ]);

  return (
    <App>
      
      <div className="chat">
        <div class="center" >
        <h1 class="display-2" align = "center">Massage</h1>
        <Userlist/>
        
        <Chatbox data={chatData}/>
        
        <Inputbox/>
      </div>
      </div>
    </App>
  );
}

export default Chat;
