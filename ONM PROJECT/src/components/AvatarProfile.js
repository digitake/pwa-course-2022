import '../css/AvatarProfile.css';

function AvatarProfile(props) {
  return (
    <div className="avatar-profile-large">
      <img src={`https://avatars.dicebear.com/api/micah/${props.name}.svg`} alt={props.name}/>
    </div>
  );
}

export default AvatarProfile;