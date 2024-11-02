import axios from "axios";

export const getOrders= async () => {
  try {
    const response = await axios.get("http://localhost:5000/getOrders");
    return response.data.orders;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
}; 

