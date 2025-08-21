import axiosInstance from './../API/axiosInstance'










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
