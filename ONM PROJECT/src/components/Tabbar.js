import '../css/Tabbar.css';
import { Link } from 'react-router-dom';

function Tabbar () {
  return (
    <div className="tabbar stick-bottom">
      <Link to="/friend-list" className="tabbutton">
        <img src='/friend-logo.png' className='tab-icon-friendlist'/>
      </Link>
      <Link to="/profile" className="tabbutton">
        <img src='/profile-logo.png' className='tab-icon-profile'/>
      </Link>
    </div>
  )
}

export default Tabbar;