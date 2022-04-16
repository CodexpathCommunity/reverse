import { Avatar } from "@material-ui/core";
import styled from "styled-components";

export const MessageBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 10px 20px;
  overflow-y: scroll;

  p {
    border-radius: 8px;
    line-height: 1.25;
    max-width: 65%;
    padding: 0.5rem 0.875rem;
    position: relative;
    word-wrap: break-word;

    &::before,
    &::after {
      bottom: -0.1rem;
      content: "";
      height: 1rem;
      position: absolute;
    }
  }
`;

export const SenderFlex = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: ${({ tail }) => (tail ? "20px" : "10px")};
`;
export const RecieverFlex = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: ${({ tail }) => (tail ? "20px" : "10px")};
`;

export const UserAvatar = styled(Avatar)`
  &&& {
    height: 30px;
    width: 30px;
    margin-top: auto;
  }
`;

export const MessageMyEnd = styled.p`
  align-self: flex-end;
  background-color: #0f6fff;
  color: #fff;
  margin-right: ${({ tail }) => (tail ? "15px" : "45px")};

  &:before {
    display: ${({ tail }) => (tail ? "inline" : "none")};
    border-bottom-left-radius: 0.8rem 0.7rem;
    border-right: 1rem solid #0f6fff;
    right: -0.35rem;
    transform: translate(0, -0.1rem);
  }

  &:after {
    background-color: #fff;
    border-bottom-left-radius: 0.5rem;
    right: -40px;
    transform: translate(-30px, -2px);
    width: 10px;
  }
`;
export const MessageUserEnd = styled.p`
  align-self: flex-start;
  background-color: #dde9f8;
  color: #162040;
  margin-left: ${({ tail }) => (tail ? "15px" : "45px")};

  &:before {
    display: ${({ tail }) => (tail ? "inline" : "none")};
    border-bottom-right-radius: 0.8rem 0.7rem;
    border-left: 1rem solid #dde9f8;
    left: -0.35rem;
    transform: translate(0, -0.1rem);
  }

  &:after {
    background-color: #fff;
    border-bottom-right-radius: 0.5rem;
    left: 20px;
    transform: translate(-30px, -2px);
    width: 10px;
  }
`;
