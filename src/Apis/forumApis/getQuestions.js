import axios from 'axios';

export const getQuestion = async () => {
    try {
        const response = await axios.get(`http://localhost:5000/getQuestion`);
        return response.data;
    } catch (error) {
        console.error('Error fetching replies:', error);
        throw error;
    }
};
