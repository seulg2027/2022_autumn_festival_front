import axios from 'axios';

const instance = axios.create({

  baseURL: 'http://localhost:8080/api/',
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Credentials': true,
  },
});

export default instance;
