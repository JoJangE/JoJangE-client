import axios from 'axios';

const defaultAPI = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_LOCALHOST,
  baseURL: 'http://localhost:8080',
});

export default defaultAPI;
