import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "65f2de2554cb18d6592aae5c0810ac0c",
    language: "en-US",
  },
});

api.get("tv/popular");

export default api;
