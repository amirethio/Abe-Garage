import React, { useEffect, useState } from "react";

import {
  getSingleOrder,
  deleteOrder,
} from "../../../../services/order.service";
import { format } from "date-fns";
import { FaCheckCircle, FaTimesCircle, FaCalendarCheck } from "react-icons/fa";
import Loader, { MiniLoader } from "../../Loader";

function OrderProfile({ hash }) {
  const [order, setOrder] = useState({});


  useEffect(() => {
    getSingleOrder(hash).then((res) => {
      setOrder(res[0]);
    });
  }, [hash]);

  const renderStatus = (status) => {
    if (status === 1) {
      return (
        <span className="status-chip status-completed">
          <FaCheckCircle className="me-1" /> Completed
        </span>
      );
    } else if (status === 0) {
      return (
        <span className="status-chip status-inprogress">
          <FaTimesCircle className="me-1" /> In Progress
        </span>
      );
    } else {
      return (
        <span className="status-chip status-reserved">
          <FaCalendarCheck className="me-1" /> Reserved
        </span>
      );
    }
  };

  return (
    <section className="history-section mt-5 pt-5">
      <div className="auto-container">
        <div className="history-block 1">
          <div className="years">Info</div>
          <div className="content">
            <h4>
              Customer : {order.customer_first_name} {order.customer_last_name}
            </h4>
            <div>
              <p className="mb-1">
                <strong>Email:</strong> {order.customer_email}
              </p>
              <p className="mb-1">
                <strong>Phone number:</strong> {order.customer_phone_number}
              </p>
              <p className="mb-1">
                <strong>Active Customer:</strong>{" "}
                {order.active_customer_status ? "Yes" : "No"}
              </p>
            </div>
          </div>
        </div>
        <div className="history-block">
          <div className="years">Order</div>
          <div className="content">
            <h4>Order Details</h4>
            <div className="order-details-card p-3 border rounded">
              <p>
                <strong>Order ID:</strong> {order.order_id}
              </p>
              <p>
                <strong>Customer:</strong> {order.customer_first_name} (
                {order.customer_email} | {order.customer_phone_number})
              </p>
              <p>
                <strong>Vehicle:</strong> {order.vehicle_make}{" "}
                {order.vehicle_model} ({order.vehicle_year}) – Serial:{" "}
                {order.vehicle_serial}
              </p>
              <p>
                <strong>Order Date:</strong>{" "}
                {order.order_date
                  ? format(new Date(order.order_date), "MM-dd-yyyy | HH:mm")
                  : "Not Completed"}
              </p>
              <p>
                <strong>Received By:</strong> {order.employee_first_name}
              </p>
              <p>
                <strong>Status:</strong> {renderStatus(order.order_status)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderProfile;
