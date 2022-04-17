import axios from "axios";
import { API_URL } from "../constants/api";

export const postCurrentGoogleUser = (data) => {
  return axios.post(`${API_URL}/auth/google`, data);
};
