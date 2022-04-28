import '../css/Avatar.css';

function Avatar(props) {
  const base64Image = props.base64Image;

  return (
    <div className="ProfileAvatar">
      <img src={base64Image} alt={props.name}/>
    </div>
  );
}

export default Avatar;