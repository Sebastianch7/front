import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
        'X-API-KEY': 'Joonik2025',
    },
});

export default apiClient;
