import React, { useState } from "react";
import { LgContainer } from "../GeneralStyles";
import SignIn from "./signIn/index";
import SignUp from "./signUp/index";

const loginPages = [
  {
    title: "Login",
    Component: SignIn,
  },
  {
    title: "SignUp",
    Component: SignUp,
  },
];

function Login() {
  const [activePage, setActivePage] = useState("Login");
  return (
    <>
      <LgContainer>
        {loginPages.map(
          ({ title, Component }) =>
            activePage === title && (
              <Component key={title} setPage={setActivePage} title={title} />
            )
        )}
      </LgContainer>
    </>
  );
}

export default Login;
