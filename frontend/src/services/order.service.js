import axiosInstance from './../API/axiosInstance'





export const addOrder = async (order_data) => {
  try {
    const response = await axiosInstance.post("/api/order" , order_data);
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
