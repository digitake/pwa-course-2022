import '../css/Topbar.css';
import { Link } from 'react-router-dom';

function Topbar (props) {
  return (
    <div className="topbar">
      {props.title}
    </div>
  )
}

export default Topbar;