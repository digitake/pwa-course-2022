import '../css/Tabbar.css';
import { Link } from 'react-router-dom';

function Tabbar () {
  return (
    <div className="tabbar">
      <h2 className='menu'>Menu</h2>
      <Link to="/profile" className="tabbutton">
        Profile
      </Link>
      <Link to="/chat" className="tabbutton">
        Group Chat
      </Link>
    </div>
  )
}

export default Tabbar;