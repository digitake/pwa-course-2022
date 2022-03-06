import { useState } from 'react';
import App from './components/App.js';
import Chatbox from './components/Chatbox.js';
import Userlist from './components/Userlist.js';
import Inputbox from './components/Inputbox.js';
import './Chat.css';

function Chat() {
  const [chatData, setChatData] = useState([
    {user: "เจ้าหนี้", msg: "ทำไมยังไม่คืนอีกอ่ะ", position: "right"},
    {user: "ลูกหนี้เเสนน่ารัก", msg: "ยังไม่มีเลย แปปๆ", position: "left"},
    {user: "ลูกหนี้เเสนน่ารัก", msg: "เดวคืนไม่เกินเดือนนี้", position: "left"},
    {user: "เจ้าหนี้", msg: "รอมา3อาทิตย์เเล้ว", position: "right"},
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
