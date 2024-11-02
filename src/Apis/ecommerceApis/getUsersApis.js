import axios from "axios";

export const getUsers= async () => {
  try {
    const response = await axios.get("http://localhost:5000/getUsers");
    console.log("response.data.users:", response.data); 

    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}; 

