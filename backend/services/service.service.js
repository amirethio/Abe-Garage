const db = require("./../config/db.config");
const pool =  db.pool
async function addServices(service_data) {
  try {
    const { service_name, service_description } = service_data;
    const sql = ` insert into common_services (service_name  ,service_description) values (?,?)`;
    const response = await db.query(sql, [service_name, service_description]);    
    return {
      sucess: true,
      message: "service added sucessfully",
    };
  } catch (error) {
    return;
  }
}
async function fetchServices() {
  try {
    const sql = `select * from common_services `;
    const response = await db.query(sql);
    return response
  } catch (error) {
    return;
  }
}

async function deleteService(service_id) {
  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();

    // 1. Delete any order-services mapping this service
    await connection.query(`DELETE FROM order_services WHERE service_id = ?`, [
      service_id,
    ]);

    // 2. Delete the service itself
    await connection.query(`DELETE FROM common_services WHERE service_id = ?`, [
      service_id,
    ]);

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
  addServices,
  fetchServices,
  deleteService,
};
