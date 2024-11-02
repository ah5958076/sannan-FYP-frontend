// threadDeleteApis.js
import axios from 'axios';

// Delete a order
export const deleteOrder = async (orderId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/deleteOrder/${orderId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
