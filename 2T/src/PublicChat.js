import './css/Chat.css'
import Tabbar from './components/Tabbar';

function PublicChat() {
    return(
        <div className='chat'>
            <div className='ctop'>Public Chat</div>
            <div className='cmiddle'></div>
            <Tabbar/>
        </div>
    );
}

export default PublicChat;