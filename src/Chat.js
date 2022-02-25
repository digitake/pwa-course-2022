import App from './components/App.js';
import Chatbox from './components/Chatbox.js';
import Userlist from './components/Userlist.js';
import Inputbox from './components/Inputbox.js';
import './Chat.css';

function Chat() {
  return (
    <App>
      <div className="chat">
        <Userlist/>
        <Chatbox/>
        <Inputbox/>
      </div>
    </App>
  );
}

export default Chat;
