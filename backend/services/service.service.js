const db = require("./../config/db.config");

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
module.exports = {
  addServices,
  fetchServices
};
