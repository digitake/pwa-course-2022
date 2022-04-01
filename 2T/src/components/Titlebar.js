import '../css/Titlebar.css';
import { Link } from 'react-router-dom';

function Titlebar ({value}) {
  return (
    <div className="titlebar">
        <Link to='/main' className='backbutton'>BACK</Link>
        <div className='name'>{value}</div>
    </div>
  )
}

export default Titlebar;