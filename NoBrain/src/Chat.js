import { useState } from 'react';
import App from './components/App.js';
import Chatbox from './components/Chatbox.js';
import Userlist from './components/Userlist.js';
import Inputbox from './components/Inputbox.js';
<<<<<<< HEAD:papering/App/src/Chat.js
import Topbar from './components/Topbar';
import './Chat.css';

function Chat () {

  const [chatData, setChatData] = useState([ //Array
=======
import MiniAvatar from './components/MiniAvatar.js';
import './Chat.css';

function Chat() {
  const [chatData, setChatData] = useState([
>>>>>>> class-origin/class/229j/groupwork:NoBrain/src/Chat.js
    {user: "user1", msg: "Hello", position: "left"},
    {user: "user2", msg: "Hi", position: "right"},
    {user: "user1", msg: "How are you?", position: "left"},
    {user: "user2", msg: "I'm fine, thank you. And you?", position: "right"},
    {user: "user1", msg: "I'm fine, thank you.", position: "left"},
  ]);

  return (
    
    <App>
<<<<<<< HEAD:papering/App/src/Chat.js
      <Topbar title="Chats"/>
      <div className="chat">
=======
      <div className="chat"><div className='userbox'><MiniAvatar name={"user1"}/> user1</div>  
>>>>>>> class-origin/class/229j/groupwork:NoBrain/src/Chat.js
        <Chatbox data={chatData}/>
        <Inputbox/>
      </div>
    </App>
  );
}

export default Chat;
