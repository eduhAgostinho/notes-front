import axios from 'axios';

export const configureAxiosSettings = () => {
    axios.defaults.baseURL = "http://localhost:4000";
    axios.defaults.headers.post['Content-Type'] = 'application/json';
}
