import React, { useEffect } from "react";
import UserList from "../components/UserList/index";
import { useSelector } from "react-redux";

function UserLists() {
  const id = useSelector((state) => state?.user?.loggedinUser);
  console.log("id", id);

  useEffect(() => {}, []);

  return <UserList />;
}

export default UserLists;
