import '../css/Tabbar.css';
import { Link } from 'react-router-dom';

function Tabbar () {
  return (
    <div className="tabbar">
      <Link to="/friend-list" className="tabbutton">
        <div>Home</div>
      </Link>
      <Link to="/chat" className="tabbutton">
      <div> Massage </div>
      </Link>
      <Link to="/profile" className="tabbutton">
      <div> Profile </div>
      </Link>
    </div>
  )
}

export default Tabbar;