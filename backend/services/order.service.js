const db = require("./../config/db.config");
const { v4: uuidv4 } = require("uuid");

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

async function fetchCustomer() {
  try {
    const sql = `SELECT
    customer_identifier.customer_email,
    customer_identifier.customer_phone_number,
    customer_identifier.customer_added_date,
    customer_identifier.customer_hash,
    customer_info.customer_first_name,
    customer_info.customer_last_name,
    customer_info.active_customer_status
FROM customer_identifier
LEFT JOIN customer_info
    ON customer_identifier.customer_id = customer_info.customer_id;
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

async function getSingleCustomer(customerHash) {
  const sql = `SELECT
    customer_identifier.customer_email,
    customer_identifier.customer_id,
    customer_identifier.customer_phone_number,
    customer_identifier.customer_added_date,
    customer_identifier.customer_hash,
    customer_info.customer_first_name,
    customer_info.customer_last_name,
    customer_info.active_customer_status
FROM customer_identifier
LEFT JOIN customer_info
    ON customer_identifier.customer_id = customer_info.customer_id where customer_hash = ? ;
  `;
  const rows = await db.query(sql, [customerHash]);
  return rows;
}

async function updateCustomer(new_data) {
  try {
    const {
      customer_first_name,
      customer_last_name,
      customer_phone_number,
      active_customer_status,
      customer_id,
      customer_hash,
    } = new_data;
    const sql = ` update customer_info set customer_first_name = ? , customer_last_name = ? ,active_customer_status = ? where  customer_id = ?`;
    const response = await db.query(sql, [
      customer_first_name,
      customer_last_name,
      active_customer_status,
      customer_id,
    ]);
    // console.log(response , "response 1");

    const sql1 = ` update customer_identifier set customer_phone_number = ?  where  customer_hash = ?`;
    const response1 = await db.query(sql1, [
      customer_phone_number,
      customer_hash,
    ]);

    return {
      sucess: true,
      message: "sucessfully update the employee",
    };
  } catch (error) {
    console.log(error);
    return {
      sucess: false,
      message: "something went wrong",
    };
  }
}

module.exports = {
  addOrder,
};
