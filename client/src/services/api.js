//client/src/services/api.js

import axios from 'axios';

// const API_BASE_URL = 'http://localhost:3000/api';

const api = axios.create({
    baseURL: '/api',
    withCredentials: true,
});

export const campgroundsAPI = {
    getAll: () => api.get('/campgrounds'),
    getById: (id) => api.get(`/campgrounds/${id}`),
    create: (campgroundData) => api.post('/campgrounds', campgroundData),
    update: (id, campgroundData) => api.put(`/campgrounds/${id}`, campgroundData),
    delete: (id) => api.delete(`/campgrounds/${id}`),
};

export default campgroundsAPI;