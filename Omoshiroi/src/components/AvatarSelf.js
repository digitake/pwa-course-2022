import '../css/Avatar.css';

function AvatarSelf(props) {
  const base64Image = props.base64Image;

  return (
    <div className="avatarSelf">
      <img src={base64Image} alt={props.name}/>
    </div>
  );
}

export default AvatarSelf;