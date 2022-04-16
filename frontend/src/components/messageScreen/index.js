import React, { useState } from "react";
import SwipeableDrawer from "@material-ui/core/Drawer";
import { ChatScreenContainer } from "./styles";
import MessageHeader from "./meessageHeader";
import MessageBody from "./messageBody/index";
import MessageForm from "./messageForm";
import { useHistory } from "react-router-dom";

function MessageScreen() {
  const [drawer, setDrawer] = useState(true);
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const history = useHistory();

  const handleClose = () => {
    history.push("/messages");
    setDrawer(false);
  };

  return (
    <div>
      <SwipeableDrawer
        anchor={"right"}
        open={drawer}
        onClose={handleClose}
        onOpen={() => setDrawer(true)}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        className=""
      >
        <ChatScreenContainer>
          <MessageHeader />
          <MessageBody />
          <MessageForm />
        </ChatScreenContainer>
      </SwipeableDrawer>
    </div>
  );
}

export default MessageScreen;
