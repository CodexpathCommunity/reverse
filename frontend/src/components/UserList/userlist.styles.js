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
    border: #e5e7eb;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .user-list-img {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    object-fit: cover;
  }

  .user-list-name {
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 0.5rem;
  }
`;
