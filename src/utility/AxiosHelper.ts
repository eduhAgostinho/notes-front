import axios from 'axios';

export const configureAxiosSettings = () => {
    const HOST = process.env.REACT_APP_API_HOST || 'localhost';
    const PORT = process.env.REACT_APP_API_PORT || '3000';
    const PROTOCOL = process.env.REACT_APP_API_PROTOCOL || 'http';
    axios.defaults.baseURL = `${PROTOCOL}://${HOST}:${PORT}`;
    axios.defaults.headers.post['Content-Type'] = 'application/json';
}
