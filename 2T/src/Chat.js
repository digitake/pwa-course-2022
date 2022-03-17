import Tabbar from './components/Tabbar';
import './css/Chat.css';

function Chat(){
    return(
        <div className='chatboard'>
            <div className='ctop'>Name</div>
            <div className='cmiddle'></div>
            <Tabbar/>
        </div>
    )
}

export default Chat;