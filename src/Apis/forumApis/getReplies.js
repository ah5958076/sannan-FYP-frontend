import axios from 'axios';

export const getReplies = async () => {
    try {
        const response = await axios.get(`http://localhost:5000/getReplies`);
        return response.data;
    } catch (error) {
        console.error('Error fetching replies:', error);
        throw error;
    }
};
