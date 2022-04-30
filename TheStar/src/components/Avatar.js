import '../css/Avatar.css';

function Avatar(props) {
  return (
    <div className="avatar">
      <img src={`https://avatars.dicebear.com/api/personas/${props.name}.svg`} alt={props.name}/>
    </div>
  );
}

export default Avatar;