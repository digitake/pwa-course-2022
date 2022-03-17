import '../css/Tabbar.css';
import { Link } from 'react-router-dom';

function Tabbar(){
    return(
        <div className='tabbar stick-bottom'>
            <Link to='/' className='tabbutton'>
                Login
            </Link>
            <Link to='/Profile' className='tabbutton'>
                Profile
            </Link>
            <Link to='/Chat' className='tabbutton'>
                Chat
            </Link>
        </div>
    )
}

export default Tabbar;