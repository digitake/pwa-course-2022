import '../css/Titlebar.css';
import ChatAvatar from './ChatAvatar';

function Titlebar ({value}) {
  return (
    <div className='titlebar'>
      <div className='avatar-align'>
        <ChatAvatar name={value}/>
        <div className='titlebar-text-align'>{value}</div>
        </div>
    </div>
  )
}

export default Titlebar;

/*<div className='titlebar-text-align '>{value}</div>*/