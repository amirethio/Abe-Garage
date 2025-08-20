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
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}