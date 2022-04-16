import styled from "styled-components";

export const MessageFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  border-top: 1px solid #e5e7eb;
`;

export const MessageInput = styled.textarea`
  height: 95px;
  padding: 8px;
  box-sizing: border-box;
  resize: none;
  width: 100%;
  border: none;
  font-size: 16px;
  border: 1px solid #e5e7eb;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  &: focus {
    outline: none;
  }
`;

export const MessageBtn = styled.button`
  width: 100%;
  padding: 14px;
  box-sizing: border-box;
  border: none;
  background: #0f6fff;
  border-radius: 4px;
  color: white;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
