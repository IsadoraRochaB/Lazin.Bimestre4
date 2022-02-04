import axios from "axios";

const api = axios.create({
  baseURL: "https://adonisweb1isa.herokuapp.com/",
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api