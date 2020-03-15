import apiUrl from "../apiConfig";
import axios from "axios";

// INDEX, SHOW, CREATE, UPDATE, DESTROY

// Get All Articles
export const getAllArticles = () => {
  // return a promise so that I can catch the error & display it in the UI
  return axios.get(`${apiUrl}/articles`);
};

// Add Article
export const addNewArticle = article => {
  // return a promise so that I can catch the error & display it in the UI
  return axios.post(`${apiUrl}/articles`, { article });
};

// Edit Article by ID
export const editArticleByID = (id, article) => {
  // return a promise so that I can catch the error & display it in the UI
  // Add the id in the params to edit a specific article and pass the new article as object
  return axios.patch(`${apiUrl}/articles/${id}`, { article });
};

// Delete Article By ID
export const deleteArticleByID = id => {
  // return a promise so that I can catch the error & display it in the UI
  return axios.delete(`${apiUrl}/articles/${id}`);
};
