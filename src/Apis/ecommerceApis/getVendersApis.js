import axios from "axios";

export const getVenders= async () => {
  try {
    const response = await axios.get("http://localhost:5000/getVenders");
    return response.data.venders;
  } catch (error) {
    console.error("Error fetching venders:", error);
    throw error;
  }
}; 

