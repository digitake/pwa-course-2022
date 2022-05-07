import '../css/Avatar.css';

export function Avatar(props) {
  const base64Image = props.base64Image;
  
  return (
    <div className="avatar">
      <img src={base64Image} alt={props.name}/>
    </div>
  );
}

export function Avatarbot(props) {
  return (
    <div className="avatarbot">
      <img src={`https://avatars.dicebear.com/api/human/${props.name}.svg`} alt={props.name}/>
    </div>
  );
}

export default Avatar;

