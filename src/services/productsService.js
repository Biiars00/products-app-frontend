import axios from 'axios';

export const getProducts = async (page = 0, limit = 5) => {
  try {
    const response = await axios.get(`http://localhost:8080/api-jct/inventory?page=${page}&size=${limit}&sort=name`);
    console.log(response.data.totalPages)
    return {
      products: response.data.content,
      totalPages: response.data.totalPages,
    };
  } catch (error) {
    throw new Error('Products not found!');
  }
};

export const addProduct = async (productData) => {
  try {
    await axios.post('http://localhost:8080/api-jct/inventory', productData);
  } catch (error) {
    throw new Error('Error adding product!');
  }
};

export const editProduct = async (id, productData) => {
  try {
    await axios.put(`http://localhost:8080/api-jct/inventory/${id}`, productData);
  } catch (error) {
    throw new Error('EError editing product!');
  }
};

export const deleteProduct = async (id) => {
  try {
    await axios.delete(`http://localhost:8080/api-jct/inventory/${id}`);
  } catch (error) {
    throw new Error('Error deleting product!');
  }
};