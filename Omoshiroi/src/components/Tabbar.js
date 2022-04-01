import '../css/Tabbar.css';
import { Link } from 'react-router-dom';

function Tabbar () {
  return (
    <div className="tabbar stick-bottom">
      <Link to="/friend-list" className="tabbutton">
        <div className='img'>Friend List</div>
      </Link>
      {/* <Link to="/chat" className="tabbutton">
        Chat
      </Link> */}
      <Link to="/profile" className="tabbutton">
        <div className='img'>Profile</div>
      </Link>
    </div>
  )
}

export default Tabbar;