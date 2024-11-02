import axios from "axios";

export const getServicesByuserId = async (userId) => {
  try {
    const response = await axios.get(`http://localhost:5000/getServicesByuserId/${userId}`);
    return response.data.services;
  } catch (error) {
    console.error("getServicesByuserId Error fetching services:", error);
    throw error;
  }
};
