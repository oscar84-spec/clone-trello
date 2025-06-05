import axios from "axios";

const api = axios.create({
  baseURL: "https://api-trello-clone.onrender.com/",
  headers: { "Content-Type": "application/json" },
});

export default api;
