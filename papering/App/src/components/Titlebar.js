import '../css/Titlebar.css';

function Titlebar ({value}) {
  return (
    <div className="titlebar">
      <div className="text">{value}</div>
    </div>
  )
}

export default Titlebar;