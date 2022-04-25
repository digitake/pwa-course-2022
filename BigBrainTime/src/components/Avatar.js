import '../css/Avatar.css';

function Avatar(props) {
  return (
    <div className="avatar">
      <img src={`base64Image`} alt={props.name}/>
    </div>
  );
}

export default Avatar;