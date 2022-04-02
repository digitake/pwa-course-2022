import './Label.css'
import ChatMsg from './ChatMsg'


function chatSend(props){

    const {chat} = props
    
return (

<div className='chatbody'>
       <div className='text'>{chat}</div>

     
</div>
  
)

}export default chatSend;