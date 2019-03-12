import axios from "axios";

const api = axios.create({
  //production
  baseURL: "https://dry-sierra-90931.herokuapp.com/api/v1/"

  //development/test
  //baseURL: "http://localhost:3002/api/v1/"
});

export default api;
