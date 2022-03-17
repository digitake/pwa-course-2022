import Tabbar from './components/Tabbar';
import './css/Profile.css'
import { Link } from 'react-router-dom';

function Profile(){
  return(
    <div className='profileboard'>
      <div className='ptop'>Auttony</div>
      <div className='your'>
        <div className='yourpicture'></div>
      </div>
      <div className='friends'>Friends</div>
      <div className='list'>
        <Link to='/chat'>
          <div className='friendsflex'>
            <div className='friendspicture'></div>
          </div>
        </Link>
        <Link to='/chat'>
          <div className='friendsflex'>
            <div className='friendspicture'></div>
          </div>
        </Link>
        <Link to='/chat'>
          <div className='friendsflex'>
            <div className='friendspicture'></div>
          </div>
        </Link>
      </div>
      <Tabbar/>
    </div>
  )
}

export default Profile