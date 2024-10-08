import axios from "axios";
import {environment} from "../../environments/environment";
const taste_api =  axios.create({
  baseURL: environment.API_URL+"api/v1/",
  headers:{
    Accept : "application/json",
  },
  withCredentials: true,
})
taste_api.interceptors.request.use(
  (config) => {
    const sessionToken = localStorage.getItem('sessionToken');
    if(sessionToken){
      config.headers['Authorization'] = `${sessionToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)
taste_api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if(error.response.status === 401){
     localStorage.removeItem('sessionToken');
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
)
export default taste_api;
