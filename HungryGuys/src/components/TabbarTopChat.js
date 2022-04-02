import '../css/Tabbar.css';
import { Link } from 'react-router-dom';

function TabbarTopChat () {
  return (
    <div className="tabbar stick-top">
      <Link to="/friend-list" className="tabbutton">
        <img src='icon-06.png' className='tab-icon'/>
      </Link>
      <div className="titletabbar"> Chat </div>
      <Link to="/profile" className="tabbutton">
        <img src='icon-07.png' className='tab-icon'/>
      </Link>
    </div>
  )
}

export default TabbarTopChat;