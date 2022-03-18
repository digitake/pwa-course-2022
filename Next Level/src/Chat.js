import './Chat.css';
import { Inputbox } from'./components/Inputbox.js';

function Chat(){
    return (
    <div className='App'>
        <div className="Name">Username</div>
        <div className="Chathistory">
            Chat History
            <div className="Userchat1">-Hello!</div>
            <div className="Userchat2">Hello!-</div>
        </div>
        <Inputbox/>
    </div>
    )
}

export default Chat;