import './css/Chat.css'
import { Inputbox } from'./components/Inputbox.js';

function Chat(){
    return(
        <div className='ChatBoard'>
            <div 
                className='CB1 Title'>
                <div className='TextSetting04'>
                    Name
                </div>
            </div>
            <div 
                className='CB2 TextBorder02'>
            </div>
            <div
                className='CB1 TextBorder03'>
                <div >
                    <Inputbox/>
                </div>
            </div>
        </div>
    
    )
}

export default Chat;