import '../css/ChatAvatar.css';

function ChatAvatar(props){
    return (
        <div className='chatavatar'>
        <img src={`https://avatars.dicebear.com/api/micah/${props.name}.svg`} alt={props.name}/>
        </div>
    )
}

export default ChatAvatar;