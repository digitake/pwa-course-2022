import '../css/Avatar.css';

function Avatar(props) {
  return (  
    <div class="fav">
      <img src={`https://avatars.dicebear.com/api/human/${props.name}.svg`} alt={props.name}/>
    </div>
  );
}

export default Avatar;

{/* <div className="avatar">
      <img src={`https://avatars.dicebear.com/api/human/${props.name}.svg`} alt={props.name}/>
    </div> */}