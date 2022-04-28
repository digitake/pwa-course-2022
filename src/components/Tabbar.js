import '../css/Tabbar.css';
import { Link } from 'react-router-dom';

function Tabbar () {
  return (
    <div className="tabbar stick-bottom">
      <Link to="/friend-list" className="tabbutton">
      <ion-icon name="people-outline"></ion-icon>
        Friends
      </Link>
      <Link to="/chat" className="tabbutton">
      <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
        Chat
      </Link>
      <Link to="/profile" className="tabbutton">
      <ion-icon name="person-circle-outline"></ion-icon>
        Profile
      </Link>
    </div>
  )
}

export default Tabbar;