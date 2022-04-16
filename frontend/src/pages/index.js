import React from "react";
import ChatHeader from "./../components/chatHeader/index";
import { Container, MessageGrid } from "./../components/GeneralStyles";
import ChatList from "./../components/chatList/index";
import MessageScreen from "../components/messageScreen";

function Messages() {
  return (
    <>
      <Container>
        <MessageGrid>
          <ChatHeader />
          <ChatList />
          <MessageScreen />
        </MessageGrid>
      </Container>
    </>
  );
}

export default Messages;
