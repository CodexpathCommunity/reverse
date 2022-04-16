import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { auth } from "./firebase";
import Login from "./components/login/Index";
import Messages from "./pages/Messages";
import ChatScreen from "./pages/ChatScreen";
import styled from "styled-components";

const PageStyle = styled.div`
  min-height: 100vh;
  width: 100%;
  background: whitesmoke;
`;

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        setUser(authUser);
        f;
      } else {
        //user is logged out
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [user]);

  return (
    <PageStyle>
      <Router>
        <Switch>
          <Route exact path="/">
            {user ? <UserList /> : <Login />}
          </Route>
          <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
          <Route path="/messages/:id" component={ChatScreen} />
          <Route path="/messages" component={Messages} />
        </Switch>
      </Router>
    </PageStyle>
  );
}

export default App;
