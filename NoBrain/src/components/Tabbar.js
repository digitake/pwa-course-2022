import '../css/Tabbar.css';
import { Link } from 'react-router-dom';

function Tabbar () {
  return (
<<<<<<< HEAD
    <div className="tabbar stick-bottom">
      <Link to="/friend-list" className="tabbutton">
        Friend List
      </Link>
      <Link to="/chat" className="tabbutton">
        Chat
      </Link>
      <Link to="/profile" className="tabbutton">
        Profile
=======
    <div className="tabbar">
      <Link to="/friend-list" className="tabbutton">
      <ion-icon name="home-outline"></ion-icon>
      </Link>
      <Link to="/chat" className="tabbutton">
      <ion-icon name="chatbubble-outline"></ion-icon>
      </Link>
      <Link to="/profile" className="tabbutton">
      <ion-icon name="person-outline"></ion-icon>
>>>>>>> eb394efbc6782808612de935bf05a22154bf08f8
      </Link>
    </div>
  )
}

export default Tabbar;