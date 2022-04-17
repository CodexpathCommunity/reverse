import React, { useEffect } from "react";
import UserList from "../components/UserList/index";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../services/user.service";
import { addUsersArray } from "../store/user";

function UserLists() {
  const id = useSelector((state) => state?.user?.loggedinUser?.uid);
  const dispatch = useDispatch();

  const getAllUsersList = async () => {
    try {
      const response = await getAllUsers(id);
      console.log(response);
      dispatch(addUsersArray(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    id && getAllUsersList();
  }, [id]);

  return <UserList />;
}

export default UserLists;
