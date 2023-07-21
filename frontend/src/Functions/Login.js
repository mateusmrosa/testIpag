import axios from 'axios';

const login = async (email, password) => {
    try {
        const API_URL = 'http://localhost:8000/api';
        const response = await axios.post(API_URL + '/login', { email, password });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export { login };
