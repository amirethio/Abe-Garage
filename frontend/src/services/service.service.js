import axiosInstance from "../API/axiosInstance";

export const addServices = async (formData) => {
  try {
    const response = await axiosInstance.post("/api/service", formData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchService = async () => {
  try {
    const response = await axiosInstance.get("/api/services");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteService = async (id) => {
  try {
    const response = await axiosInstance.delete(`/api/service/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
