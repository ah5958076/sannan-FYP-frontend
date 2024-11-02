import axios from 'axios';

export const getReviews = async (productId) => {
    try {
        const response = await axios.get(`http://localhost:5000/getReviews/${productId}`);
        return response.data.reviews;
    } catch (error) {
        console.error('Error fetching reviews data:', error);
        throw error;
    }
};
