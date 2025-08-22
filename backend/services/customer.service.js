const db = require("./../config/db.config");
const { v4: uuidv4 } = require("uuid");

async function AddCustomer(customer_data) {
  try {
    const publicId = uuidv4();
    const {
      customer_email,
      customer_phone,
      customer_first_name,
      customer_last_name,
      active_customer,
    } = customer_data;
    const sql1 = `insert into customer_identifier (customer_email ,customer_phone_number,customer_hash)values(? ,?,?)`;

    const result = await db.query(sql1, [
      customer_email,
      customer_phone,
      publicId,
    ]);
    const customerId = result.insertId;
    const sql2 = `insert into customer_info (customer_id ,customer_first_name,customer_last_name,active_customer_status)values(? ,?,?,?)`;
    await db.query(sql2, [
      customerId,
      customer_first_name,
      customer_last_name,
      active_customer,
    ]);

    return {
      sucess: true,
      message: "Customer Registered sucessfully",
    };
  } catch (error) {
    if (error.sqlState == "23000") {
      return {
        sucess: false,
        message: "User with this email already exists",
      };
    } else {
      return {
        sucess: false,
        message: "problem happen while adding a customer",
      };
    }
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


async function searchCustomers(query) {
  try {
    const sql = `SELECT
        ci.customer_email,
        ci.customer_id,
        ci.customer_phone_number,
        ci.customer_added_date,
        ci.customer_hash,
        info.customer_first_name,
        info.customer_last_name,
        info.active_customer_status
      FROM customer_identifier ci
      LEFT JOIN customer_info info
        ON ci.customer_id = info.customer_id
      WHERE info.customer_first_name LIKE ? 
         OR info.customer_last_name LIKE ?
      LIMIT 10; ;
  `;
    const response = await db.query(sql, [`%${query}%`, `%${query}%`]);
    return response;
  } catch (error) {
    console.log(error);
    
    return {
      sucess: false,
      message: "something went wrong",
    };
  }
}



module.exports = {
  AddCustomer,
  fetchCustomer,
  getSingleCustomer,
  updateCustomer,
  searchCustomers,
};
