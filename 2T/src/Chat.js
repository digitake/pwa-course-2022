import './css/Chat.css'
import { Inputbox } from'./components/Inputbox.js';

function Chat(){
    return(
        <div className='ChatBoard'>
            <div 
                className='CTop'>Name</div>
            <div 
                className='CMiddle'>
            </div>
            <div
                className='CBottom'>
                <div >
                    <Inputbox/>
                </div>
            </div>
        </div>
    
    )
}

export default Chat;