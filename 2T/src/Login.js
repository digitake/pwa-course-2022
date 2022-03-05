import './css/Login.css'

function Login(){
    return(
        <div className='LoginBoard'>
            <div 
                className='LB1 Title'>
                AuttonyApp
            </div>
            <div 
                className='LB1 TextBorder02'>
                <div 
                    className='LB1 PictureBorder'>
                </div>
                    <div className='LB2 TextSetting01'>
                        Email
                    </div>
                <div className='LB1 LoginBorder'>
                </div>
                    <div className='LB2 TextSetting01'>
                        Password
                    </div>
                <div className='LB1 LoginBorder'>
                </div>
                    <div className='LB2 TextSetting02'>
                        Forgetting Password?
                    </div>
                <div className='LB1 TextSetting03 LoginBorder'>
                    Login
                </div>
            </div>
            <div 
                className='LB1 TextBorder03'>
            </div>
        </div>
    
    )
}

export default Login;