import React, {useEffect, useState} from "react";
import io from "socket.io-client";
import { MessageBtn, MessageFormContainer, MessageInput } from "./styles";

function MessageForm() {
  let server = "http://localhost:5000";

  const socket = io(server, {transports: ['websocket', 'polling', 'flashsocket']});
  
  useEffect(()=> {

    socket.on("Output Chat Message", messageFromBackEnd => {
      console.log(messageFromBackEnd)
    
  })

  }, []);
  const [chatMsg, setChatMsg] = useState("");

  const  handleSearchChange = (e) => {
    setChatMsg(e.currentTarget.value)
}

const onSubmitChatMsg = (e) => {
  e.preventDefault();
  
  let type = "Text"
  socket.emit("Input Chat Message", {
    chatMsg,
    type
   });
   setChatMsg("")

}

  return (
    <>
      <MessageFormContainer>
        <MessageInput
         type ="text"
         placeholder="send message to Donny" 
         value={chatMsg}
         onChange={(e)=>handleSearchChange(e)}
         />
        <MessageBtn onClick={(e) => onSubmitChatMsg(e)}>Send</MessageBtn>
      </MessageFormContainer>
    </>
  );
}

export default MessageForm;
