const db = require("./../config/db.config");

async function addVehicle(vehicle_data) {
  try {
    const {
      customer_id,
      vehicle_year,
      vehicle_make,
      vehicle_model,
      vehicle_type,
      vehicle_mileage,
      vehicle_tag,
      vehicle_serial,
      vehicle_color,
    } = vehicle_data;
    const sql = `
  INSERT INTO customer_vehicle_info 
    (customer_id, vehicle_year, vehicle_make, vehicle_model, vehicle_type, vehicle_mileage, vehicle_tag, vehicle_serial, vehicle_color) 
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const response = await db.query(sql, [
      customer_id,
      vehicle_year,
      vehicle_make,
      vehicle_model,
      vehicle_type,
      vehicle_mileage,
      vehicle_tag,
      vehicle_serial,
      vehicle_color,
    ]);

    return {
      sucess: true,
      message: "sucessfully added the vehicle",
    };
  } catch (error) {
    return {
      sucess: false,
      message: "something went wrong",
    };
  }
}

async function getVehicles(id) {
  try {
    const sql = ` select * from customer_vehicle_info where customer_id = ?`;
    const response = db.query(sql, [id]);
    console.log(response);
    return response;
  } catch (error) {
    return {
      sucess: false,
      message: "someting went wrong",
    };
  }


}
module.exports = {
  addVehicle,
  getVehicles,
};
