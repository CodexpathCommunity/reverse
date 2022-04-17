import React from "react";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../../../firebase";
import {
  ButtomText,
  FormInput,
  GoogleContainer,
  GoogleFlex,
  GoogleImage,
  GoogleText,
  InputBtn,
  InputContainer,
  PolicyText,
  SignUpContainer,
  SignUpForm,
  SignUpFormContainer,
  SignUpTitle,
} from "../signUp/SignUp.Styles";

function SignIn({ setPage }) {
  const history = useHistory();
  const GoogleLogin = () => {
    auth
      .signInWithPopup(provider)

      .catch(alert);
  };

  return (
    <>
      <SignUpContainer>
        <SignUpTitle>Log In</SignUpTitle>
        <SignUpFormContainer>
          <SignUpForm>
            <InputContainer>
              <FormInput placeholder="Email" />
              <FormInput
                placeholder="Password (min 8 characters)"
                type="password"
              />
            </InputContainer>

            <InputBtn>Sign Up</InputBtn>

            <PolicyText>Forgot Password ?</PolicyText>
          </SignUpForm>
          <GoogleContainer>
            <GoogleFlex onClick={GoogleLogin}>
              <GoogleImage src="./gogl.png" />
              <GoogleText>Sign In with Google</GoogleText>
            </GoogleFlex>
          </GoogleContainer>
        </SignUpFormContainer>
        <ButtomText>
          Don't have and account?{" "}
          <span onClick={() => setPage("SignUp")}>Sign Up..</span>
        </ButtomText>
      </SignUpContainer>
    </>
  );
}

export default SignIn;
