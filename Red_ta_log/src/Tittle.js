import './Tittle.css';
import Inputbox from './components/AccountInput';
import AccountInput from './components/AccountInput';
import { Link } from 'react-router-dom';
import Avatar from './components/Avatar.js';

function Tittle(){
    return(
    <div className='Background'>
            <div className='Title'>
                REDTALOG
            </div>
        <div className='Border'>    
            <div className='Avatar_Layout'>
                <Avatar/>
            </div> 
            <div className='Text'>
                Email
            </div>
            <div className='Input'>
                <AccountInput/>
            </div>
            <div className='Text'>
                Password              
            </div>
            <div className='Input'>
                <AccountInput/>
            </div>
            <div className='Text_2'>
                forgot password?             
            </div>
        </div>       
            <div className='Border Login'>
                <Link to="/profile" className='Login'>
                    Login
                </Link>
            </div>
            <div className='Border Line'>           
            </div>
            <div className='Border AnotherLogin'>
                Facebook            
            </div>
            <div className='Border AnotherLogin'>
                Google          
            </div>       
        
               
    </div>
            
        
   
    )
}

export default Tittle;