import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { format } from "date-fns";
import { listOrder, deleteOrder } from "../../../../services/order.service";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import OrderDetailModal from "./OrderDetail";
import { FaCalendarCheck } from "react-icons/fa";


function OrdersList() {
  const [orderData, setOrderData] = useState([]);
  const [IsDetail, setIsDetail] = useState(false);
  const [singleOrder , setSingleOrder] = useState({})
  const [fetch, setFetch] = useState(false);
  const [IsDelete , setIsDelete] =  useState(false)

  const handleDelete =  (id)=>{
deleteOrder(id).then(()=>{
  setIsDelete((pre)=>!pre)
})
  }
  useEffect(() => {
    listOrder().then((data) => {
      setOrderData(data);
    });
  }, [fetch , IsDelete]);

  return (
    <>
      {IsDetail && (
        <OrderDetailModal
          orderData={singleOrder}
          setIsDetail={setIsDetail}
          setFetch={setFetch}
        />
      )}

      <div className="admin-right-side p-4 pt-0">
        <section className="contact-section pt-0 ">
          <div className="contact-title mb-4">
            <h2 className="mt-0">Orders</h2>
          </div>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>orderid</th>
                <th>Customers</th>
                <th>Vehicle</th>
                <th>Order Date</th>
                <th>Received by</th>
                <th>Order status</th>
                <th>Edit/View</th>
              </tr>
            </thead>
            <tbody>
              {orderData.length ? (
                orderData.map((order, index) => (
                  <tr key={index}>
                    <td>{order.order_id}</td>
                    <td>
                      <h5>{order.customer_first_name}</h5>
                      <li>{order.customer_email}</li>
                      <li>{order.customer_phone_number}</li>
                    </td>
                    <td>
                      <h5>
                        {order.vehicle_make} {order.vehicle_model}
                      </h5>
                      <li>{order.vehicle_year}</li>
                      <li>{order.vehicle_serial}</li>
                    </td>
                    <td>
                      {format(
                        new Date(order.order_date),
                        "MM - dd - yyyy | HH:mm"
                      )}
                    </td>
                    <td>{order.employee_first_name}</td>
                    <td>
                      {order.order_status == 1 ? (
                        <span className="status-chip status-completed">
                          <FaCheckCircle className="me-1" /> Completed
                        </span>
                      ) : order.order_status == 0 ? (
                        <span className="status-chip status-inprogress">
                          <FaTimesCircle className="me-1" /> In Progress
                        </span>
                      ) : (
                        <span className="status-chip status-reserved">
                          <FaCalendarCheck className="me-1" /> Reserved
                        </span>
                      )}
                    </td>

                    <td>
                      <div className="edit-delete-icons">
                        <Button
                          variant="warning"
                          size="sm"
                          className="me-2"
                          onClick={() => {
                            setSingleOrder(order);
                            setIsDetail(true);
                          }}
                        >
                          <i className="bi bi-pencil-square me-1">{"      "}.</i>{" "}
                          Edit{" "}
                        </Button>{" "}
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => handleDelete(order.order_id)}
                        >
                          {" "}
                          <i className="bi bi-trash me-1"></i> Delete{" "}
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="text-center py-3">
                    No Orders found
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </section>
      </div>
    </>
  );
}

export default OrdersList;

