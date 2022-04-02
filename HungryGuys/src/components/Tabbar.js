import '../css/Tabbar.css';
import { Link } from 'react-router-dom';

function Tabbar () {
  return (
    <div className="tabbar stick-bottom">
      <Link to="/friend-list" className="tabbutton">
<<<<<<< HEAD:HungryGuys/src/components/Tabbar.js
        <img src='icon-01.png' className='tab-icon'/>
      </Link>
      <Link to="/chat" className="tabbutton">
        <img src='icon-02.png' className='tab-icon'/>
      </Link>
      <Link to="/profile" className="tabbutton">
        <img src='icon-03.png' className='tab-icon'/>
=======
        Friend List
      </Link>
      <Link to="/chat" className="tabbutton">
        Chat
      </Link>
      <Link to="/profile" className="tabbutton">
        Profile
>>>>>>> 8a7d2f9f4c4fc4e54e255647f5a068b78c099c8b:NoBrain/src/components/Tabbar.js
      </Link>
    </div>
  )
}

export default Tabbar;