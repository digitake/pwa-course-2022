import './css/Chatbox.css';
import { Chats } from'./components/Chats.js';
import { Userlist } from'./components/Userlist.js';
import { Inputbox } from'./components/Inputbox.js';

function Chatbox() {
  return (
    <div className="Chatbox">
      <Userlist/>
      <Chats/>
      <Inputbox/>
    </div>
  );
}

export default Chatbox;