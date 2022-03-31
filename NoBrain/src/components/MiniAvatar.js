import '../css/MiniAvatar.css';

function MiniAvatar(props) {
  return (
    <div className="miniavatar">
      <img src={`https://avatars.dicebear.com/api/human/${props.name}.svg`} alt={props.name}/>
    </div>
  );
}

export default MiniAvatar;