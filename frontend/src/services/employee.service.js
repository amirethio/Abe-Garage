import axiosInstance from "../API/axiosInstance";

export const submitEmployee = async (formData) => {
  try {
    const response = await axiosInstance.post("/api/employee", formData);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};



export const listEmployee = async () => {
  try {
    const response = await axiosInstance.get("/api/employees");
    return response.data.data;
  } catch (error) {
    console.log(error);

    return error.message;
  }
};