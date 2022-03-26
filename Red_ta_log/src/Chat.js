import { useState } from 'react';
import App from './components/App.js';
import Chatbox from './components/Chatbox.js';
import Userlist from './components/Userlist.js';
import Inputbox from './components/Inputbox.js'; 
import './Chat.css';


function Chat() {
  const [chatData, setChatData] = useState([
    {user: "Liew", msg: "Hello", position: "left"},
  ]);

  return (
    <App>
      <div className="chat">
        <Userlist/>
        <Chatbox data={chatData}/>
        <Inputbox/>
      </div>  
      <div>
            <div 
                className='BorderSetting01 Title'>
                <div className='TextSetting04'>
                    Name
                </div>
                
            </div>
            <div 
                className='BorderSetting01 TextBorder02'>
            </div>
            <div
                className='BorderSetting01 TextBorder03'>
                <div >
                    <Inputbox/>
                </div>
            </div>
        </div>
    </App>
  );
}

export default Chat;
