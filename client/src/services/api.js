//client/src/services/api.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

const api = axios.create({
    baseURL: API_BASE_URL,
});

export const campgroundsAPI = {
    getAll: () => api.get('/campgrounds'),
    getById: (id) => api.get(`/campgrounds/${id}`),
};

export default api;