import { useState } from 'react';
import App from './components/App.js';
import Chatbox from './components/Chatbox.js';
import Userlist from './components/Userlist.js';
import Inputbox from './components/Inputbox.js';
import ChatAvatar from './components/ChatAvatar';
import './Chat.css';

function Chat() {
  let [chatData, setChatData] = useState([
    {user: "user1", msg: "Hello", position: "left"},
    {user: "me", msg: "Hi", position: "right"},
    {user: "user1", msg: "How are you?", position: "left"},
    {user: "me", msg: "I'm fine, thank you. And you?", position: "right"},
  ]);

  return (
    <App>
      <div className="chat">
       <div className='avatar-align'><ChatAvatar name={"user1"}/><div className='text-align'>SoundBaht</div></div>
        <Chatbox data={chatData}/>
        <Inputbox/>
      </div>
    </App>
  );
}

export default Chat;
