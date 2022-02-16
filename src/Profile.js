import { Avatar } from './components/Avatar.js';
import { Userlist } from'./components/Userlist.js';

function Profile() {
  return (
    <div className="Profile">
      <Avatar name="Song"/>
      <Userlist/>
    </div>
  );
}

export default Profile;