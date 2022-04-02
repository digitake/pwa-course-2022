import '../css/Tabbar.css';
import { Link } from 'react-router-dom';

function Tabbar(){
    return(
        <div className='tabbar stick-bottom'>
            <Link to='/' className='tabbutton'>
            <img src='/IconLogin.png'/>
            </Link>
            <Link to='/main' className='tabbutton'>
                <img src='/IconHome.png'/>
            </Link>
            <Link to='/chathistory' className='tabbutton'>
            <img src='/IconChat.png'/>
            </Link>
        </div>
    )
}

export default Tabbar;