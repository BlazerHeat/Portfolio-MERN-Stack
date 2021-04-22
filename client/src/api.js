import axios from "axios";

export default axios.create({
  baseURL: "https://vatsalghoghari.herokuapp.com",
  withCredentials: true,
  responseType: "json",
});
