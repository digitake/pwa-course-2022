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

        <p align = "center"><img  src="https://media.discordapp.net/attachments/800643806278058035/950027578666782750/Chat.png" alt="Home" width="150" height="50"  /></p>
        
        <Userlist/>
        
        <Chatbox data={chatData}/>
        
        <Inputbox/>
      </div>
      </div>
    </App>
  );
}

export default Chat;
