const db = require("./../config/db.config");
const pool = db.pool;
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
    return response;
  } catch (error) {
    return {
      sucess: false,
      message: "someting went wrong",
    };
  }
}

async function deleteVehicle(vehicle_id) {
  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();

    // Delete child records first (order-related)
    await connection.query(
      `DELETE os FROM order_services os 
       INNER JOIN orders o ON os.order_id = o.order_id 
       WHERE o.vehicle_id = ?`,
      [vehicle_id]
    );

    await connection.query(
      `DELETE oi FROM order_info oi
       INNER JOIN orders o ON oi.order_id = o.order_id
       WHERE o.vehicle_id = ?`,
      [vehicle_id]
    );

    await connection.query(
      `DELETE osst FROM order_status osst
       INNER JOIN orders o ON osst.order_id = o.order_id
       WHERE o.vehicle_id = ?`,
      [vehicle_id]
    );

    // Delete orders themselves
    await connection.query(`DELETE FROM orders WHERE vehicle_id = ?`, [
      vehicle_id,
    ]);

    // Finally delete the vehicle
    await connection.query(
      `DELETE FROM customer_vehicle_info WHERE vehicle_id = ?`,
      [vehicle_id]
    );

    await connection.commit();
    return { success: true };
  } catch (error) {
    await connection.rollback();
    return { success: false, error };
  } finally {
    connection.release();
  }
}

module.exports = {
  addVehicle,
  getVehicles,
  deleteVehicle,
};
