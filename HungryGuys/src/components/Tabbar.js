import '../css/Tabbar.css';
import { Link } from 'react-router-dom';

function Tabbar () {
  return (
    <div className="tabbar stick-bottom">
      <Link to="/friend-list" className="tabbutton">
        <img src='icon-01.png' className='tab-icon'/>
      </Link>
      <Link to="/chat" className="tabbutton">
        <img src='icon-02.png' className='tab-icon'/>
      </Link>
      <Link to="/profile" className="tabbutton">
        <img src='icon-03.png' className='tab-icon'/>
      </Link>
    </div>
  )
}

export default Tabbar;