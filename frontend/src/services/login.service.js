import axiosInstance from "../API/axiosInstance";

const submitLogin = async (params) => {
  try {
    const response = await axiosInstance.post("/api/employee/login", params);

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export { submitLogin };
