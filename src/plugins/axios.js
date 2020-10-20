// Lib imports
import axios from "axios";

// Sets the default url used by all of this axios instance's requests
axios.defaults.baseURL = 'http://localhost:5050';

const token = localStorage.getItem("token");
if (token) {
  axios.defaults.headers.common["Authorization"] = token;
}