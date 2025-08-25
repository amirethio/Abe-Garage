import axiosInstance from "./../API/axiosInstance";

export const addOrder = async (order_data) => {
  try {
    const response = await axiosInstance.post("/api/order", order_data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const orderFetch = async (query) => {
  try {
    const response = await axiosInstance.get(
      `api/search-customers?query=${query}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const listOrder = async () => {
  try {
    const response = await axiosInstance.get(`api/orders`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const SingleOrder = async (id) => {
  try {
    const response = await axiosInstance.get(`api/order/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateOrder = async (updated_status) => {
  try {
    const response = await axiosInstance.put("/api/order", updated_status);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
