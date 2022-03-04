import './css/Chatbox.css';
import { Chat } from'./components/Chat.js';
import { Userlist } from'./components/Userlist.js';
import { Inputbox } from'./components/Inputbox.js';

function Chatbox() {
  return (
    <div className="Chatbox">
      <Userlist/>
      <Chat/>
      <Inputbox/>
    </div>
  );
}

export default Chatbox;