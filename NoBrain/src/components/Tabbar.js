import '../css/Tabbar.css';
import { Link } from 'react-router-dom';

function Tabbar () {
  return (
    <div className="tabbar">
      <Link to="/friend-list" className="tabbutton">
      <ion-icon name="home-outline"></ion-icon>
      </Link>
      <Link to="/chat" className="tabbutton">
      <ion-icon name="chatbubble-outline"></ion-icon>
      </Link>
      <Link to="/profile" className="tabbutton">
      <ion-icon name="person-outline"></ion-icon>
      </Link>
    </div>
  )
}

export default Tabbar;