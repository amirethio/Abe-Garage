const db = require("./../config/db.config");
const { v4: uuidv4 } = require("uuid");
const pool = db.pool;
async function addOrder(order_data) {
  try {
    const order_hash = uuidv4();
    const {
      employee_id,
      customer_id,
      vehicle_id,
      order_services,
      service_completed,
      order_total_price,
      estimated_completion_date,
      additional_request,
      order_status,
    } = order_data;

    const sql1 = `
      INSERT INTO orders (employee_id, customer_id, vehicle_id, active_order, order_hash) 
      VALUES (?, ?, ?, ?, ?)
    `;

    const result = await db.query(sql1, [
      employee_id,
      customer_id,
      vehicle_id,
      1,
      order_hash,
    ]);

    const OrderId = result.insertId;

    const sql2 = `
  INSERT INTO order_services (order_id, service_id, service_completed) 
  VALUES (?, ?, ?)
`;

    for (const serviceId of order_services) {
      await db.query(sql2, [OrderId, serviceId, service_completed]);
    }

    const sql3 = `
      INSERT INTO order_info (order_id, order_total_price, estimated_completion_date, additional_request, additional_requests_completed) 
      VALUES (?, ?, ?, ?, ?)
    `;
    await db.query(sql3, [
      OrderId,
      order_total_price,
      estimated_completion_date,
      additional_request,
      0,
    ]);

    const sql4 = `INSERT INTO order_status (order_id, order_status) VALUES (?, ?)`;
    await db.query(sql4, [OrderId, order_status]);

    return {
      success: true,
      message: "Order added successfully",
      order_id: OrderId,
    };
  } catch (error) {
    console.error("Error inserting order:", error);

    return {
      success: false,
      message: "Problem happened while adding an order",
      error: error.message,
    };
  }
}

async function fetchOredrs() {
  try {
    const sql = `SELECT
    orders.order_id,
    orders.order_date,
    orders.order_hash,
    customer_info.customer_first_name,
    customer_identifier.customer_email,
    customer_identifier.customer_phone_number,
    customer_vehicle_info.vehicle_make,
    customer_vehicle_info.vehicle_model,
    customer_vehicle_info.vehicle_tag,
    customer_vehicle_info.vehicle_year,
    customer_vehicle_info.vehicle_serial,
    employee_info.employee_first_name,
    order_status.order_status,
    order_info.estimated_completion_date,
    order_info.order_total_price,
    order_info.additional_request,
  GROUP_CONCAT(common_services.service_name SEPARATOR ', ')  AS service_name
    FROM orders 
    INNER JOIN customer_info ON  orders.customer_id = customer_info.customer_id
    INNER JOIN customer_identifier ON  orders.customer_id = customer_identifier.customer_id
    INNER JOIN customer_vehicle_info ON  orders.vehicle_id = customer_vehicle_info.vehicle_id
    INNER JOIN employee_info ON  orders.employee_id = employee_info.employee_id
    INNER JOIN order_status ON  orders.order_id = order_status.order_id
    INNER JOIN order_info ON  orders.order_id = order_info.order_id
    INNER JOIN order_services ON  orders.order_id = order_services.order_id
    INNER JOIN common_services ON  order_services.service_id = common_services.service_id
    GROUP BY 
    orders.order_id,
    orders.order_date,
    orders.order_hash,
    customer_info.customer_first_name,
    customer_identifier.customer_email,
    customer_identifier.customer_phone_number,
    customer_vehicle_info.vehicle_make,
    customer_vehicle_info.vehicle_model,
    customer_vehicle_info.vehicle_tag,
    customer_vehicle_info.vehicle_year,
    customer_vehicle_info.vehicle_serial,
    employee_info.employee_first_name,
    order_status.order_status,
    order_info.estimated_completion_date,
    order_info.order_total_price,
    order_info.additional_request;
  `;
    const response = await db.query(sql);
    return response;
  } catch (error) {
    return {
      sucess: false,
      message: "something went wrong",
    };
  }
}

async function getOrder(customer_id) {
  try {
    const sql = `SELECT
    orders.order_id,
    orders.order_date,
    customer_info.customer_first_name,
    customer_identifier.customer_email,
    customer_identifier.customer_phone_number,
    customer_vehicle_info.vehicle_make,
    customer_vehicle_info.vehicle_model,
    customer_vehicle_info.vehicle_year,
    customer_vehicle_info.vehicle_serial,
    employee_info.employee_first_name,
    order_status.order_status
    FROM orders 
    INNER JOIN customer_info ON  orders.customer_id = customer_info.customer_id
    INNER JOIN customer_identifier ON  orders.customer_id = customer_identifier.customer_id
    INNER JOIN customer_vehicle_info ON  orders.vehicle_id = customer_vehicle_info.vehicle_id
    INNER JOIN employee_info ON  orders.employee_id = employee_info.employee_id
    INNER JOIN order_status ON  orders.order_id = order_status.order_id where orders.customer_id = ?
  `;
    const response = await db.query(sql, [customer_id]);
    return response;
  } catch (error) {
    return;
  }
}

async function updateOrder(order_data) {
  try {
    const { order_status, order_id } = order_data;
    const sql1 = `UPDATE order_status SET order_status = ? WHERE order_id = ?`;

    const result = await db.query(sql1, [order_status, order_id]);

    return {
      success: true,
      message: "Order updated successfully",
    };
  } catch (error) {

    return {
      success: false,
      message: "Problem happened while updating an order",
      error: error.message,
    };
  }
}

async function deleteOrder(order_id) {
  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();

    // 1. Delete related order services
    await connection.query(`DELETE FROM order_services WHERE order_id = ?`, [
      order_id,
    ]);

    // 2. Delete order info
    await connection.query(`DELETE FROM order_info WHERE order_id = ?`, [
      order_id,
    ]);

    // 3. Delete order status
    await connection.query(`DELETE FROM order_status WHERE order_id = ?`, [
      order_id,
    ]);

    // 4. Delete the order itself
    await connection.query(`DELETE FROM orders WHERE order_id = ?`, [order_id]);

    await connection.commit();
    console.log("Order and related data deleted successfully");
    return { success: true };
  } catch (error) {
    console.error("Error deleting order:", error);
    await connection.rollback();
    return { success: false, error };
  } finally {
    connection.release();
  }
}

module.exports = {
  addOrder,
  fetchOredrs,
  getOrder,
  updateOrder,
  deleteOrder,
};
