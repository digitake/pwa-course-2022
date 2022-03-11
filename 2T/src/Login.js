import './css/Login.css'

function Login(){
    return(
        <div className='LoginBoard'>
            <div 
                className='LTop'>
                AuttonyApp
            </div>
            <div 
                className='LMiddle'>
                <div 
                    className='PictureBorder'>
                </div>
                    <div className='TextSetting01'>
                        Email
                    </div>
                <div className='LoginBorder'>
                </div>
                    <div className='TextSetting01'>
                        Password
                    </div>
                <div className='LoginBorder'>
                </div>
                    <div className='TextSetting02'>
                        Forgetting Password?
                    </div>
                <div className='LoginBorder'>
                    <div className='TextSetting03'>Login</div>
                </div>
            </div>
            <div 
                className='LBottomTab'>
            </div>
        </div>
    
    )
}

export default Login;