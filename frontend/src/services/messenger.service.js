import axios from "axios";
import { API_URL } from "../constants/api";
import { addConversationObject, addMessageObject } from "../store/messenger";

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

export const sendDirectMessage = (message) => {
  const sendDirectMessageUrl = API_URL + "/messages";
  return axios.post(sendDirectMessageUrl, message);
};

export const sendMessageToUser =
  ({ recieverSlug, senderSlug, lastName, firstName, text, link, quote }) =>
  async (dispatch) => {
    try {
      let activeConversation = await checkifConversationExist(
        recieverSlug,
        senderSlug
      );

      if (
        activeConversation.data === null ||
        activeConversation.data === undefined
      ) {
        //start conversation data
        try {
          const newConversationData = {
            senderSlug,
            recieverSlug,
            lastReciever: recieverSlug,
          };
          const newConv = await postNewConversation(newConversationData);
          //dispatch new conversation to redux
          dispatch(addConversationObject(newConv.data));

          const message = {
            conversationId: newConv.data._id,
            sender: senderSlug,
            reciever: recieverSlug,
            text: text,
          };

          const newMessage = await sendDirectMessage(message);
          dispatch(addMessageObject(newMessage.data));
        } catch (error) {
          console.log(error);
        }
      } else {
        const lastConversationMessage = {
          lastReciever: recieverSlug,
        };

        try {
          const updateConversation = await updateConversation(
            lastConversationMessage,
            activeConversation.data._id
          );

          const message = {
            conversationId: activeConversation.data._id,
            sender: senderSlug,
            reciever: recieverSlug,
            text: text,
          };

          const newMessage = await sendDirectMessage(message);
          dispatch(addMessageObject(newMessage.data));
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
