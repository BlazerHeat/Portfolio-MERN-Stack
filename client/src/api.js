import axios from "axios";

const getURL = () => {
  return process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : "https://vatsalghoghari2.herokuapp.com";
}

export default axios.create({
  baseURL: getURL(),
  withCredentials: true,
  responseType: "json",
});
