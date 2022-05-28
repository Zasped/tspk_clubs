import axios from 'axios';

const URL = 'http://localhost:7000/api';

const $api = axios.create({
    withCredentials: true,
    baseURL: URL,
});

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('TokenRefreshScreensaver')}`;
    return config;
});

$api.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config
    if (error.response.status == 401 && error.config && !error.config._isRetry){
        try {
            originalRequest._isRetry  = true;
            const response = await axios.get(`${URL}/auth/refresh`, {withCredentials: true});
            return $api.request(originalRequest)
        } catch (e) {
            console.log('without auth')
        }
    }
    throw error;
});

export default $api;