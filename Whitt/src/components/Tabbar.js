import '../css/Tabbar.css';
import { Link } from 'react-router-dom';


function Tabbar () {
  return (
    <div className="tabbar stick-bottom">
      <Link to="/search-friends" className="tabbutton">
        <img src = "./iconsearch1.png" className='tabbaricon' />
      </Link>
      <Link to="/chat" className="tabbutton">
        <img src = "./iconchat.png" className='tabbaricon'/>
      </Link>
      <Link to="/profileapp" className="tabbutton">
         <img src = "./iconprofile1.png" className='tabbaricon'/>
      </Link>
       

    </div>
  )
}

export default Tabbar;