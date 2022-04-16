import React from "react";
import { auth, provider } from "../../../firebase";
import {
  SignUpContainer,
  SignUpFormContainer,
  SignUpTitle,
  SignUpForm,
  InputContainer,
  FormInput,
  InputBtn,
  PolicyText,
  GoogleFlex,
  GoogleText,
  GoogleImage,
  GoogleContainer,
  ButtomText,
} from "./SignUp.Styles";

function SignUp({ setPage }) {
  const GoogleLogin = () => {
    auth
      .signInWithPopup(provider)
      .then((user) => console.log(user))
      .catch(alert);
  };

  return (
    <>
      <SignUpContainer>
        <SignUpTitle>Sign Up</SignUpTitle>
        <SignUpFormContainer>
          <SignUpForm>
            <InputContainer>
              <FormInput placeholder="Your full name" />
              <FormInput placeholder="Email" />
              <FormInput
                placeholder="Password (min 8 characters)"
                type="password"
              />
            </InputContainer>

            <InputBtn>Sign Up</InputBtn>

            <PolicyText>
              By signing up, I agree to DonniesList's{" "}
              <span>Terms of Service</span> and <span>Privacy Policy.</span>
            </PolicyText>
          </SignUpForm>
          <GoogleContainer>
            <GoogleFlex onClick={GoogleLogin}>
              <GoogleImage src="./gogl.png" />
              <GoogleText>Sign Up with Google</GoogleText>
            </GoogleFlex>
          </GoogleContainer>
        </SignUpFormContainer>
        <ButtomText>
          Already have and account?{" "}
          <span onClick={() => setPage("Login")}>Log In..</span>
        </ButtomText>
      </SignUpContainer>
    </>
  );
}

export default SignUp;
