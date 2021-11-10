import axios from 'axios';

export const axiosClient = axios.create({
    baseURL: 'https://6168ef0809e030001712c10b.mockapi.io',
    headers: {
        'Content-Type': 'application/json',
    },
});
export default axiosClient