import '../css/Avatar.css';

function Avatar(props) {
  return (
    <div className="avatar">
      <img src={`https://avatars.dicebear.com/api/human/${props.name}.svg`} alt={props.name}/>
    </div>
  );
}

export default Avatar;

// import '../css/Avatar.css';

// function Avatar(props) {
//   const base64Image = props.base64Image;

//   return (
//     <div className="avatar">
//       <img src={base64Image} alt={props.name}/>
//     </div>
//   );
// }

// export default Avatar;