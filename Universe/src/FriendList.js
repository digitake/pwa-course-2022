import './FriendList.css';
import App from './components/App';
import Avatar from './components/Avatar';
import { useChatStateContext } from './context/FirebaseChatContextProvider';
import { Link } from 'react-router-dom';


function FriendList(){
  const { userList } = useChatStateContext();
  



  return(
    <App>
      <div className="friend-list">
      <div className='center'>
      <h1 align = "center"><img src="https://media.discordapp.net/attachments/800643806278058035/950027579006525470/Home.png" alt="Home" width="150" height="50"  /></h1>
      
      <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        รายชื่อทั้งหมด
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
    {
        userList.map((item) => {
          return (
            <Link to={`/privatechat/${item.key}`} key={item.key}>
              <div className={`friend-list-item ${item.position}`}>
              <Avatar name={item.displayName} base64Image={item.image} />
                <div>{item.displayName}</div>
                
              </div>
            </Link>
          )
        })
      }

    
    </div>
  </div>
  </div>



      </div>
      </div>
    </App>
  )
}

export default FriendList;