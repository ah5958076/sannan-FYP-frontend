import axios from 'axios';

export const getRepliesByQuestionId = async (threadID) => {
    try {
        const response = await axios.get(`http://localhost:5000/getRepliesByQuestionId/${threadID}`);
        return response.data;
    } catch (error) {
        console.error('getRepliesByQuestionId Error fetching replies:', error);
        throw error;
    }
};

