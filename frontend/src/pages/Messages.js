import React from "react";
import ChatHeader from "./../components/chatHeader/index";
import { Container, MessageGrid } from "./../components/GeneralStyles";
import ChatList from "./../components/chatList/index";

function Messages() {
  return (
    <>
      <Container>
        <MessageGrid>
          <ChatHeader />
          <ChatList />
        </MessageGrid>
      </Container>
    </>
  );
}

export default Messages;
