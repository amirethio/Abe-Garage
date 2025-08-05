import axiosInstance from "../API/axiosInstance";

const submitEmployee = async (formData) => {
  try {
    const response = await axiosInstance.post("/api/employee", formData);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export default submitEmployee;
