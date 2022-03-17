import Tabbar from './components/Tabbar';
import './css/Login.css'

function Login(){
    return(
        <div className='loginboard'>
            <div 
                className='ltop'>
                AuttonyApp
            </div>
            <div 
                className='lmiddle'>
                <div 
                    className='pictureborder'>
                </div>
                    <div className='textsetting01'>
                        Email
                    </div>
                <div className='linputbox'>
                </div>
                    <div className='textsetting01'>
                        Password
                    </div>
                <div className='linputbox'>
                </div>
                    <div className='textsetting02'>
                        Forgetting Password?
                    </div>
                <div className='linputbox'>
                    <div className='textsetting03'>Login</div>
                </div>
            </div>
            <Tabbar/>
        </div>
    
    )
}

export default Login;