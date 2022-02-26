import './css/Profile.css'

function Profile(){
  return(
    <div>
      <div className='BorderSetting01 MenuTitle'>TextApp</div>
      <div className='BorderSetting01 Your'>
        <div className='YourPicture'></div>
      </div>
      <div className='BorderSetting01 Friends'>Friends</div>
      <div className='BorderSetting01 List'>
        <div className='FriendsPicture'></div>
        <div className='FriendsPicture'></div>
        <div className='FriendsPicture'></div>
        <div className='FriendsPicture'></div>
      
      </div>
      <div className='BorderSetting01 TextBorder03'></div>
    </div>
  )
}

export default Profile