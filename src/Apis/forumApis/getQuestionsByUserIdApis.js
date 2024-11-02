import axios from 'axios';

export const getQuestionsByUserId = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:5000/getQuestionsByUserId/${userId}`);
        return response.data;
    } catch (error) {
        console.error('getQuestionsByUserId Error fetching questions:', error);
        throw error;
    }
};
