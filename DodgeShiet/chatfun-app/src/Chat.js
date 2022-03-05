import './css/Chat.css';
import './Chat.js';


function Chatbox(){
    return (
        <div className="ChatBox">
            <h1>ChatBox</h1>
        </div>
    )

}
function ChatinputBtns(){
    return(
        <div className="ChatBtns" >
            <button onClick="SendMsg" className="btn" type="submit">
		Send
		</button>
            </div>
    )
}
function Chatinputbox() {
    return (
        <div className="Chatinputbox">
        <input type="text"/>
        </div>
    )

}
function Chatapp() {
    return (
          <div className = "Chatapp">
              <Chatbox/>
              <Chatinputbox/>
              <ChatinputBtns/>
          </div>
    );

}

export default Chatapp;