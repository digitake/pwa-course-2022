import '../css/Tabbar.css';
import { Link } from 'react-router-dom';

function Tabbar () {
  return (
    <div className="tabbar stick-bottom">
      <Link to="/friend-list" className="tabbutton">
      <img src='/ICON3_1.png' className='tab-icon'/>
      </Link>
      <Link to="/chat" className="tabbutton">
      <img src='/ICON1 (1).png' className='tab-icon'/>
      </Link>
      <Link to="/profile" className="tabbutton">
      <img src='/ICON2_1.png' className='tab-icon'/>
      </Link>
    </div>
  )
}

export default Tabbar;