import '../css/Tabbar.css';
import { Link } from 'react-router-dom';

function Tabbar () {
  return (
    <div className="tabbar stick-bottom">
      <Link to="/friend-list" className="tabbutton">
<<<<<<< HEAD:papering/App/src/components/Tabbar.js
      <img src = "/Friends_icon.png" className="tab-icon"/>
        Friend List
      </Link>
      <Link to="/chat" className="tabbutton">
      <img src = "/Chats_hover.svg" className="tab-icon"/>
        Chat
      </Link>
      <Link to="/profile" className="tabbutton">
      <img src = "/Profile_icon.png" className="tab-icon"/>
        Profile
=======
        <i class="fa fa-list-ul" aria-hidden="true"></i>
      </Link>
      <Link to="/chat" className="tabbutton">
        <i class="fa fa-weixin" aria-hidden="true"></i>
      </Link>
      <Link to="/profile" className="tabbutton">
        <i class="fa fa-user-circle" aria-hidden="true"></i>
>>>>>>> 4dd716d90f6c3958bd4ded103bd3b879413f1cfa:GGez/src/components/Tabbar.js
      </Link>
    </div>
  )
}

export default Tabbar;