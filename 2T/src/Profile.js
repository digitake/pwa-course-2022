import './css/Profile.css'

function Profile(){
  return(
    <div className='ProfileBoard'>
      <div className='PB1'>Auttony</div>
      <div className='PB1 Your'>
        <div className='YourPicture'></div>
      </div>
      <div className='Friends'>Friends</div>
      <div className='PB1 List'>
        <div className='FriendsPicture'></div>
        <div className='FriendsPicture'></div>
        <div className='FriendsPicture'></div>
        <div className='FriendsPicture'></div>
      
      </div>
      <div className='BottomTab'></div>
    </div>
  )
}

export default Profile