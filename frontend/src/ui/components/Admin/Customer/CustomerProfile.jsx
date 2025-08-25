import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import CustomerVhicle from "./CustomerVhicle";
import { singleCustomer } from "../../../../services/customer.service";
import { SingleOrder } from "../../../../services/order.service";
import { format } from "date-fns";



function CustomerProfile() {
  const [customer, setCustomer] = useState({});
  const [orderData, setOrderData] = useState([]);
  const { hash } = useParams();

  useEffect(() => {
    singleCustomer(hash).then((res) => {
      setCustomer(res[0]);
      console.log(res);
    });
  }, []);
    useEffect(() => {
      if (customer.customer_id) {
        console.log("here we go", customer.customer_id);
        SingleOrder(customer.customer_id).then((res) => {
            setOrderData(res)
          console.log(res);
        });
      }
    }, [customer.customer_id]);

  return (
    <section className="history-section mt-5 pt-5">
      {/* {console.log(customer)} */}
      <div className="auto-container">
        <div className="history-block">
          <div className="years">info</div>
          <div className="content">
            <h4>
              Customer : {customer.customer_first_name}{" "}
              {customer.customer_last_name}
            </h4>
            <div className="container">
              {/* <div className="card shadow p-4"> */}
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <div>
                    <p className="mb-1">
                      <strong>Email:</strong>
                      {customer.customer_email}
                    </p>
                    <p className="mb-1">
                      <strong>Phone number:</strong>{" "}
                      {customer.customer_phone_number}
                    </p>
                    <p className="mb-1">
                      <strong>Active Customer:</strong>
                      {customer.active_customer_status ? "yes" : "No"}
                    </p>
                    <span className="fw-bold me-2">
                      Edit Customer Info{" "}
                      <Button variant="warning" size="sm" className="ms-2">
                        <Link
                          to={`/admin/${customer.customer_hash}/edit-customer`}
                          className="text-dark text-decoration-none"
                        >
                          Edit
                        </Link>
                      </Button>
                    </span>
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="history-block">
          <div className="years">cars</div>
          <div className="content">
            <h4>Vechile of fist Name</h4>
            <div className="text">
              <CustomerVhicle id={customer?.customer_id} />
            </div>
          </div>
        </div>
        <div className="history-block">
          <div className="years">Orders</div>
          <div className="content">
            <h4>Order of {customer.customer_first_name}.</h4>
            <div>
              <Table striped bordered hover responsive>
                {orderData.length ? (
                  <>
                    <thead>
                      <tr>
                        <th>orderid</th>
                        <th>Customers</th>
                        <th>Vehicle</th>
                        <th>Order Date</th>
                        <th>Received by</th>
                        <th>Order status</th>
                        <th>EDIT/ DELETE</th>
                      </tr>
                    </thead>
                    {orderData.map((order) => (
                      <>
                        <tbody>
                          <tr key={order.order_id}>
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
                              {order.order_status
                                ? "Completed"
                                : "NotCompleted"}
                            </td>
                            <td>
                              <div className="edit-delete-icons">
                                <Button
                                  variant="warning"
                                  size="sm"
                                  className="me-2"
                                >
                                  <Link>Edit</Link>
                                </Button>
                                <Button variant="danger" size="sm">
                                  <Link to={``}>Delete</Link>
                                </Button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </>
                    ))}
                  </>
                ) : (
                  <tbody>
                    <tr>
                      <td colSpan={8} className="text-center py-3">
                        No Orders found
                      </td>
                    </tr>
                  </tbody>
                )}
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomerProfile;
