import '../css/Avatar.css';

function Avatarprofile(props) {
  const base64Image = props.base64Image;

  return (
    <div className="avatarprofile">
      <img src={base64Image} alt={props.name}/>
    </div>
  );
}

export default Avatarprofile;