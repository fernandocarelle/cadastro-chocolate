import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

api.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem('@chocolate-front/token');
      window.location.href = '/login';
    }
  }
);

api.interceptors.request.use(async (req) => {
  const token = localStorage.getItem('@chocolate-front/token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default api;
