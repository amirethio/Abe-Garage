import axiosInstance from "../API/axiosInstance";

export const submitvehicle = async (vechile_data) => {
  try {
    console.log(vechile_data, "the data");

    const repsose = await axiosInstance.post("/api/vehicle", vechile_data);
    return repsose.data;
  } catch (error) {
    console.log(error);
  }
};
