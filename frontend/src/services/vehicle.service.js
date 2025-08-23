import axiosInstance from "../API/axiosInstance";

export const submitvehicle = async (vechile_data) => {
  try {
      const repsose = await axiosInstance.post("/api/vehicle", vechile_data);
      console.log(repsose);
      
    return repsose.data;
  } catch (error) {
    return;
  }
};

export const fetchVechile = async (id) => {
  try {
    const response = await axiosInstance(`/api/vehicle/${id}`);
    return response.data;
  } catch (error) {
    return;
  }
};
