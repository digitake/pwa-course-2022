import { useState } from 'react';
import App from './components/App.js';
import Chatbox from './components/Chatbox.js';
import Userlist from './components/Userlist.js';
import Inputbox from './components/Inputbox.js';
import './Chat.css';

function Chat() {
  const [chatData, setChatData] = useState([
    {user: "Larppawat ", msg: "อยู่ไหน???", position: "left"},
    {user: "ME ", msg: "อยู่ห้อง มีอะไร??", position: "right"},
    {user: "Larppawat  ", msg: "ไปหาอะไรกินกัน", position: "left"},
    {user: "ME ", msg: "กินอะไรดี", position: "right"},
    {user: "Larppawat  ", msg: "ชาบูมั้ย", position: "left"},
    {user: "ME ", msg: "ได้ๆเจอกันที่มธ.", position: "right"},
    {user: "Larppawat  ", msg: "Ok", position: "left"},
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