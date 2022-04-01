import './css/Chat.css'
import Tabbar from './components/Tabbar';

function Chathistory() {
    return(
        <div className='chat'>
            <div className='ctop'>Chat History</div>
            <div className='cmiddle'></div>
            <Tabbar/>
        </div>
    );
}

export default Chathistory;