import '../css/Tabbar.css';
import { Link } from 'react-router-dom';

function TabbarTop ({value}) {
  return (
    <div className="tabbar stick-top">
      <Link to="/profile" className="tabbutton">
        <img src='icon-05.png' className='tab-icon'/>
      </Link>
      <div className="titletabbar"> {value} </div>
      <Link to="/friend-list" className="tabbutton">
      <img src='icon-04.png' className='tab-icon'/>
      </Link>
    </div>
  )
}

export default TabbarTop;