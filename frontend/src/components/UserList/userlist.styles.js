import styled from "styled-components";

export const UserListContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  margin: 1rem 0;

  .user-list-card {
    width: 100%;
    height: 20rem;
    border-radius: 0.5rem;
    background: #ffffff;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
