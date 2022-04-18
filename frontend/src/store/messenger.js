import { createSlice } from "@reduxjs/toolkit";

const reduceDuplicateArray = (arr) =>
  arr.reduce((acc, curr) => {
    if (!acc.find((m) => m._id === curr._id)) {
      acc.push(curr);
    }
    return acc;
  }, []);

const slice = createSlice({
  name: "messenger",
  initialState: {
    conversations: [],
    messages: [],
  },

  reducers: {
    addConversationObject: (state, action) => {
      state.conversations = reduceDuplicateArray([
        ...state.conversations,
        action.payload,
      ]);
    },
    addConversationsArray: (state, action) => {
      state.conversations = reduceDuplicateArray([
        ...state.conversations,
        ...action.payload,
      ]);
    },
    addMessageObject: (state, action) => {
      state.messages = reduceDuplicateArray([
        ...state.messages,
        action.payload,
      ]);
    },
    addMessagesArray: (state, action) => {
      state.messages = reduceDuplicateArray([
        ...state.messages,
        ...action.payload,
      ]);
    },
  },
});

export default slice.reducer;
export const {
  addConversationObject,
  addConversationsArray,
  addMessageObject,
  addMessagesArray,
} = slice.actions;
