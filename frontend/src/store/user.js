import { createSlice } from "@reduxjs/toolkit";

const reduceDuplicateArray = (arr) =>
  arr.reduce((acc, curr) => {
    if (!acc.find((m) => m._id === curr._id)) {
      acc.push(curr);
    }
    return acc;
  }, []);

const slice = createSlice({
  name: "user",
  initialState: {
    loggedinUser: {},
    users: [],
  },

  reducers: {
    setLoggedinUser: (state, action) => {
      state.loggedinUser = action.payload;
    },
    addUserObject: (state, action) => {
      state.users = reduceDuplicateArray([...state.users, action.payload]);
    },
    addUsersArray: (state, action) => {
      state.users = reduceDuplicateArray([...state.users, ...action.payload]);
    },
  },
});

export default slice.reducer;
export const { addUserObject, addUsersArray, setLoggedinUser } = slice.actions;
