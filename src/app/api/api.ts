import axios from "axios";

const API_URL = "http://localhost:5000/products"; // Backend URL

export const getProducts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// export const createProducts = async (name: string, email: string) => {
//     const response = await axios.post(API_URL, { name, email });
//     return response.data;
// };

// export const updateUser = async (id: number, name: string, email: string) => {
//     const response = await axios.put(`${API_URL}/${id}`, { name, email });
//     return response.data;
// };

export const deleteProduct = async (id: number) => {
    await axios.delete(`${API_URL}/${id}`);
};
