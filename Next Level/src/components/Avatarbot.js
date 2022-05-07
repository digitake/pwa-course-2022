import '../css/Avatar.css';

export function Avatarbot(props) {
  return (
    <div className="avatarbot">
      <img src={`https://avatars.dicebear.com/api/human/${props.name}.svg`} alt={props.name}/>
    </div>
  );
}

export default Avatarbot;