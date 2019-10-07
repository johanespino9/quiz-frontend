import axios from "axios";

export default axios.create({
  baseURL: "https://rocky-fjord-76906.herokuapp.com/",
  responseType: "json"
});