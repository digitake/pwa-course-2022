import './css/Profile.css'

function Profile(){
  return(
    <div className='ProfileBoard'>
      <div className='PTop'>Auttony</div>
      <div className='Your'>
        <div className='YourPicture'></div>
      </div>
      <div className='Friends'>Friends</div>
      <div className='List'>
        <div className='FriendsPicture'></div>
        <div className='FriendsPicture'></div>
        <div className='FriendsPicture'></div>
        <div className='FriendsPicture'></div>
      
      </div>
      <div className='PBottomTab'></div>
    </div>
  )
}

export default Profile