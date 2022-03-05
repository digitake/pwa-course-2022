import { useState } from 'react';
import App from './components/App.js';
import Chatbox from './components/Chatbox.js';
import Userlist from './components/Userlist.js';
import Inputbox from './components/Inputbox.js';
import './Chat.css';

function Chat() {
  const [chatData, setChatData] = useState([
    {user: "user1", displayName: "มนุษย์ 1",msg: "ทำงานไหม", position: "left"},
    {user: "Unknown", displayName: "Me",msg: "ไม่ว่างอะ", position: "right"},
    {user: "user1", displayName: "มนุษย์ 1",msg: "เล่นเกมไหม", position: "left"},
    {user: "Unknown", displayName: "Me",msg: "จัดไป", position: "right"},
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
