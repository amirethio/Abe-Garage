import axiosInstance from "../API/axiosInstance";

export const submitvehicle = async (vechile_data) => {
  try {
      const repsose = await axiosInstance.post("/api/vehicle", vechile_data);
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

export const deleteVehicle = async (id)=>{
   try {
    const response = await axiosInstance.delete(`/api/vehicle/${id}`);
    return response.data;
  } catch (err) {
    return 
  }
}