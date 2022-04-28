import { useState } from 'react';
import App from './components/App.js';
import Chatbox from './components/Chatbox.js';
import Userlist from './components/Userlist.js';
import Inputbox from './components/Inputbox.js';
import './Chat.css';

function Chat() {
  const [chatData, setChatData] = useState([]);

  const [user, setUser] = useState("Me") 
  const [position, setPosition] = useState("right")
const send = (msg) => {
  chatData.push({user: user, msg: msg, position: position})
  user === "Me"? setUser("Larppawat"): setUser("Me")
  position === "right"? setPosition("left"): setPosition("right")
setChatData([...chatData])
}
  return (
    <App>
      <div className="chat">
        <Userlist/>
        <Chatbox data={chatData}/>
        <Inputbox onClick = {send}/>
      </div>
    </App>
  );
}

export default Chat;