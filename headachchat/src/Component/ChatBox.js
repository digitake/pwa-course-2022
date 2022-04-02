import { useState } from "react"

function Chatbox(props){

    const [chat, setChat] = useState('')

function inputChat(event){
    setChat(event.target.value)

}

function saveChat(event){
    event.preventDefault()
    props.onAddChat(chat)
    /*console.log(chat);*/
    setChat('')
}
    
    return(
        <form onSubmit={saveChat}>

    <div className='chatboxbg'>
         <button className='button plus' type='submit'>+</button>
         <input className='chatbox' type ="text" name='Chat' placeholder='Chatbox' onChange={inputChat} value={chat}></input>
         <button className='button' type='submit'>Submit</button>
    </div>
        </form>
    
    
    )
}
export default Chatbox;



