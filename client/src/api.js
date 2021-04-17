import axios from "axios";

export default axios.create({
  baseURL: "https://edu-dyno.herokuapp.com",
  withCredentials: true,
  responseType: "json",
});
