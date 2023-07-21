import axios from 'axios';

const register = async (email, password) => {
    try {
        const API_URL = 'http://localhost:8000/api';
        const token = localStorage.getItem('token');

        const headers = {
            'Content-Type': 'application/json',
            'Connection': 'keep-alive',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }

        console.log(headers);
        const response = await axios.post(API_URL + '/create', { email, password }, { headers });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export { register };
