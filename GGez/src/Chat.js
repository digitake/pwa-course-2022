import { useState } from 'react';
import App from './components/App.js';
import Chatbox from './components/Chatbox.js';
import Userlist from './components/Userlist.js';
import Inputbox from './components/Inputbox.js';
import './Chat.css';

function Chat() {
  const [chatData, setChatData] = useState([
    {user: "Nattan Lowa", msg: "สวัสดีจ้า เป็นไอดอลปะ", position: "left"},
    {user: "Super idol", msg: "ใช่คับ ดังมากด้วย", position: "right"},
    {user: "Nattan Lowa", msg: "ไม่ได้ถาม?", position: "left"},
    {user: "Super idol", msg: "หมายถึง i fine, thank you and you?", position: "right"},
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
