import axiosInstance from "../API/axiosInstance";


const submitLogin = async (params) => {
  try {
    const response = await axiosInstance.post("/api/employee/login", params);
    // console.log(response.data.data);
    
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export { submitLogin };


// // ///////////////////////////
// import axiosInstance, { setAccessToken } from "../API/axiosInstance";

// const submitLogin = async (params) => {
//   try {
//     const response = await axiosInstance.post("/api/employee/login", params);
//     setAccessToken(response.data.accessToken);

//     console.log(response);

//     return response.data;
//   } catch (error) {
//     console.log(error);

//     return error.response.data;
//   }
// };

// export { submitLogin };
