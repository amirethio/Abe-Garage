import axiosInstance from "./../API/axiosInstance";

export async function submitcustomer(form_data) {
  try {
    const response = await axiosInstance.post("/api/customers", form_data);
    return response.data;
  } catch (error) {
    return [];
  }
}
export async function listCustomers() {
  try {
    const response = await axiosInstance.get("/api/customers");
    return response.data;
  } catch (error) {
    return [];
  }
}

export const singleCustomer = async (hash) => {
  try {
    const response = await axiosInstance.get(`/api/customer/${hash}`);
    return response.data.data;
  } catch (error) {
    return error.message;
  }
};

export const updatecustomer = async (formData) => {
  try {
    const response = await axiosInstance.put("/api/customer", formData);

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteCustomer = async (id) => {
  try {
    const response = await axiosInstance.delete(`/api/vehicle/${id}`);

    return response.data;
  } catch (error) {
    return;
  }
};
