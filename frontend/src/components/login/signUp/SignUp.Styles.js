import styled from "styled-components";

//styled container
export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const SignUpTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 60px;
`;

//formcontainer
export const SignUpFormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid #e5e7eb;
  max-width: 640px;
  width: 100%;
`;

//form
export const SignUpForm = styled.form`
  display: grid;
  grid-gap: 2rem;
  padding: 1rem;
  border-right: 1px solid #e5e7eb;
`;
export const GoogleContainer = styled.div`
  display: grid;
  padding: 1rem;
`;
export const GoogleFlex = styled.div`
  display: flex;
  height: min-content;
  cursor: pointer;
  align-items: center;
  padding: 12px;
  border: 1px solid #e5e7eb;
`;
//google image
export const GoogleImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 12px;
`;
//google text
export const GoogleText = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #333333;
`;
export const InputContainer = styled.div`
  display: grid;
  grid-gap: 1.5rem;
`;
export const FormInput = styled.input`
  font-size: 14px;
  padding: 12px;
  border: 1px solid #e5e7eb;

  &:focus {
    outline: none;
  }
`;
export const InputBtn = styled.button`
  width: full;
  padding: 20px;
  background: #3f81c7;
  color: white;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const PolicyText = styled.p`
  color: #888888;
  font-size: 11px;
  line-height: 21px;
  text-align: center;

  span {
    color: #3f81c7;
  }
`;
export const ButtomText = styled.p`
  color: #666666;
  font-size: 14px;
  line-height: 21px;
  margin-top: 30px;

  span {
    color: #3f81c7;
    cursor: pointer;
  }
`;
