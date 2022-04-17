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
import UserLists from "./pages/UserLists";
import { postCurrentGoogleUser } from "./services/user.service";
import { setLoggedinUser } from "./store/user";
import { useDispatch } from "react-redux";

const PageStyle = styled.div`
  background: whitesmoke;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  box-sizing: border-box;
`;

function App() {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  const handleUserUpdate = async (user) => {
    try {
      const userData = await postCurrentGoogleUser(user);
      dispatch(setLoggedinUser(userData.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        const googleUser = {
          displayName: authUser.displayName,
          email: authUser.email,
          photoURL: authUser.photoURL,
          uid: authUser.uid,
        };
        setUser(googleUser);
        handleUserUpdate(googleUser);
      } else {
        //user is logged out
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <PageStyle>
      <Router>
        <Switch>
          <Route exact path="/">
            {user ? <UserLists /> : <Login />}
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
