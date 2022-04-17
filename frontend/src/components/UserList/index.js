import React from "react";
import { LgContainer } from "../GeneralStyles";
import { UserListContainer } from "./userlist.styles";

function UserList() {
  return (
    <LgContainer>
      <UserListContainer>
        <div className="user-list-card">userlist</div>
        <div className="user-list-card">userlist</div>
        <div className="user-list-card">userlist</div>
        <div className="user-list-card">userlist</div>
      </UserListContainer>
    </LgContainer>
  );
}

export default UserList;
