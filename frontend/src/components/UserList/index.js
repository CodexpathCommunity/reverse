import React from "react";
import { LgContainer } from "../GeneralStyles";
import { UserListContainer } from "./userlist.styles";
import { useSelector } from "react-redux";
import UserCard from "./UserCard";

function UserList() {
  const userList = useSelector((state) => state.user.users);

  return (
    <LgContainer>
      <UserListContainer>
        {userList.map(({ displayName, uid, photoUrl }) => (
          <UserCard key={uid} displayName={displayName} photoUrl={photoUrl} />
        ))}
      </UserListContainer>
    </LgContainer>
  );
}

export default UserList;
