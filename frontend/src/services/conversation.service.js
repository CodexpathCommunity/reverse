import axios from "axios";
import { API_URL } from "../constants/api";

export const getUserConversation = (id) => {
  const url = `${API_URL}/conversations/user/${id}`;
  return axios.get(url);
};

export const checkifConversationExist = (recieverSlug, senderSlug) => {
  const checkIfUserConversationUrl =
    API_URL + "/conversations/match/" + recieverSlug + "/" + senderSlug;

  return axios.get(checkIfUserConversationUrl);
};

export const postNewConversation = (newConversationData) => {
  const newConversationUrl = API_URL + "/conversations";
  return axios.post(newConversationUrl, newConversationData);
};

export const updateConversation = (updateConversationData, conversationID) => {
  const updateConversationUrl =
    API_URL + "/conversations/update" + conversationID;
  return axios.put(updateConversationUrl, updateConversationData);
};
