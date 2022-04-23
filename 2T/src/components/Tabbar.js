import '../css/Tabbar.css';
import { Link } from 'react-router-dom';

function Tabbar(){
    return(
        <div className='tabbar stick-bottom'>
            <Link to='/main' className='tabbutton'>
                <img src='/IconHome.png'/>
            </Link>
            <Link to='/publicchat' className='tabbutton'>
            <img src='/IconChat.png'/>
            </Link>
        </div>
    )
}

export default Tabbar;