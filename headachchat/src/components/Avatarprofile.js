import '../css/Avatar.css';

function Avatarprofile(props) {
  return (
    <div className="avatarprofile">
      <img src={`https://avatars.dicebear.com/api/human/${props.name}.svg`} alt={props.name}/>
    </div>
  );
}

export default Avatarprofile;