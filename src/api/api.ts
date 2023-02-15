import axios from 'axios';

const defaultAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LOCALHOST,
});

export default defaultAPI;
