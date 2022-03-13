import './css/Chat.css'
import { Link } from 'react-router-dom';

function Chat(){
    return(
        <div className='chatboard'>
            <div className='ctop'>Name</div>
            <div className='cmiddle'></div>
            <div className='cbottom'>
                <Link to='/'>Back</Link>
            </div>
        </div>
    
    )
}

export default Chat;