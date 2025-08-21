import axiosInstance from "./../API/axiosInstance";

export async function submitcustomer(form_data) {
  try {
    const response = await axiosInstance.post("/api/customers", form_data);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export async function listCustomers() {
  try {
    const response = await axiosInstance.get("/api/customers");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export const singleCustomer = async (hash) => {
  try {
    const response = await axiosInstance.get(`/api/customer/${hash}`);
    return response.data.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};



export const updatecustomer = async (formData) => {
  try {
    const response = await axiosInstance.put("/api/customer", formData);
    console.log(formData, "form data");
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);

    return error.response.data;
  }
};