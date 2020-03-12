import apiUrl from "../apiConfig";
import axios from "axios";

// INDEX, SHOW, CREATE, UPDATE, DESTROY

// Get All Articles
export const getAllArticles = () => {
  // return a promise so that I can catch the error & display it in the UI
  return axios.get(`${apiUrl}/articles`);
};

// Delete Article By ID
export const deleteArticleByID = id => {
  return axios.delete(`${apiUrl}/articles/${id}`);
};
