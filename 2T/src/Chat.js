import './css/Chat.css'
import { Inputbox } from'./components/Inputbox.js';

function Chat(){
    return(
        <div>
            <div 
                className='BorderSetting01 Title'>
                <div className='TextSetting04'>
                    Name
                </div>
            </div>
            <div 
                className='BorderSetting01 TextBorder02'>
            </div>
            <div
                className='BorderSetting01 TextBorder03'>
                <div >
                    <Inputbox/>
                </div>
            </div>
        </div>
    
    )
}

export default Chat;