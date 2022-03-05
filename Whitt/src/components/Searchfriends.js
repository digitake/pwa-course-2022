import Avatar from "./Avatar";
import "./css/SearchFriends.css";

function SearchFriends (props) {
    let data = props.data;

    return (
        <div className = "searchfriends">
            {
              data.map((item,index) => {
                return (<div key = {index} className = {'searchfriends-item ${item.position}'}>
                    <div>{item.displayName}</div>
                    <Avatar name={item.user}/>   
                </div>)
              })    
            }
        </div>
    )
}

export default SearchFriends;