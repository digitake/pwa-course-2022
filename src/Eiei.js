import './css/Eiei.css'

function Eiei()
{
    return(
        <div className='main'>
            <div className='userlist'>
                <div className='text_userlist'>
                    Omoshiroi
                </div>
            </div>

            <div className='chat'>
                <div>
                    <div className='talk_name right'>ฉันเอง</div>
                    <div className='talk_right right'>ทำงานตอนไหนดี</div>
                </div>

                <div>
                    <div className='talk_name left'>เพื่อน A</div>
                    <div className='talk_left left'>ก่อนส่งชั่วโมงหนึ่ง</div>
                </div>

                <div>
                    <div className='talk_name right'>ฉันเอง</div>
                    <div className='talk_right right'>เค๊ะ</div>
                </div>
            </div>

            <div className='inputbox'>
                <input className='input_text' />
                <button className='btn'>ส่ง</button>
            </div>
        </div>
    )
}

export default Eiei;