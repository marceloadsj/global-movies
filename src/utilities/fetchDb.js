import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_THE_MOVIE_DB_BASE_URL
});

instance.interceptors.request.use(config => {
  config.params = {
    ...config.params,
    api_key: process.env.REACT_APP_THE_MOVIE_DB_TOKEN
  };

  return config;
});

export default instance;
