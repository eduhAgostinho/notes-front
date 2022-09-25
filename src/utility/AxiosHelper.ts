import axios from 'axios';

export const configureAxiosSettings = () => {
    const HOST = process.env.REACT_APP_API_HOST || 'localhost';
    const PORT = process.env.REACT_APP_API_PORT || '3000';
    axios.defaults.baseURL = `http://${HOST}:${PORT}`;
    axios.defaults.headers.post['Content-Type'] = 'application/json';
}
