import axios from "axios";

export const getServices = async () => {
  try {
    const response = await axios.get("http://localhost:5000/getServices");
    return response.data.services;
  } catch (error) {
    console.error("Error fetching services:", error);
    throw error;
  }
};
