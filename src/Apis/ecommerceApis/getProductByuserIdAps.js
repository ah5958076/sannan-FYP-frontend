import axios from "axios"


export const getProductByuserId =async (userId)=>{
    const data = await axios.get(`http://localhost:5000/getProductByuserId/${userId}`);
    return data
}