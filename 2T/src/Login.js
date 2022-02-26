import './css/Login.css'

function Login(){
    return(
        <div>
            <div 
                className='BorderSetting01 Title'>
                TextApp
            </div>
            <div 
                className='BorderSetting01 TextBorder02'>
                <div 
                    className='BorderSetting01 PictureBorder'>
                </div>
                    <div className='BorderSetting02 TextSetting01'>
                        Email
                    </div>
                <div className='BorderSetting01 LoginBorder'>
                </div>
                    <div className='BorderSetting02 TextSetting01'>
                        Password
                    </div>
                <div className='BorderSetting01 LoginBorder'>
                </div>
                    <div className='BorderSetting02 TextSetting02'>
                        Forgetting Password?
                    </div>
                <div className='BorderSetting01 TextSetting03 LoginBorder'>
                    Login
                </div>
            </div>
            <div 
                className='BorderSetting01 TextBorder03'>
            </div>
        </div>
    
    )
}

export default Login;