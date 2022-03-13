import './css/Login.css'
import { Link } from 'react-router-dom';

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
                    <div className='textsetting03'>
                        <Link to='/profile'>Login</Link>
                        </div>
                </div>
            </div>
            <div className='lbottomtab'></div>
        </div>
    
    )
}

export default Login;