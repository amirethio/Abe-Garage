import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import CustomerVhicle from "./CustomerVhicle";
import { singleCustomer } from "../../../../services/customer.service";
import { SingleOrder, deleteOrder } from "../../../../services/order.service";
import { format } from "date-fns";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import Loader, { MiniLoader } from "../../Loader";
import { fetchVechile } from "../../../../services/vehicle.service";
import { FaCalendarCheck } from "react-icons/fa";

function CustomerProfile() {
  const [customer, setCustomer] = useState({});
  const [orderData, setOrderData] = useState([]);
  const { hash } = useParams();
  const [deletestatus, setDeleteStatus] = useState(false);
  const [customerloading, setcustomerLoading] = useState(true);
  const [orderloading, setorderLoading] = useState(true);
  const [vehicleloading, setvehicleLoading] = useState(true);
  const [results, setResults] = useState([]);

  const handleDelete = (id) => {
    deleteOrder(id).then(() => {
      setDeleteStatus((pre) => !pre);
    });
  };

  useEffect(() => {
    singleCustomer(hash).then((res) => {
      setCustomer(res[0]);
      setcustomerLoading(false);
    });
  }, [hash]);

    useEffect(() => {
      if (customer.customer_id) {
        fetchVechile(customer?.customer_id).then((res) => {
          setResults(res);
          setvehicleLoading(false);
        });
      }
    }, [customer.customer_id, deletestatus]);


  useEffect(() => {
    if (customer.customer_id) {
      SingleOrder(customer.customer_id).then((res) => {
        setOrderData(res);
        setorderLoading(false);
      });
    }
  }, [customer.customer_id, ]);

  return (
    <section className="history-section mt-5 pt-5">
      {console.log(vehicleloading)}
      <div className="auto-container">
        <div className="history-block 1">
          <div className="years">info</div>
          <div className="content">
            {customerloading ? (
              <MiniLoader />
            ) : (
              <>
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
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="history-block 2">
          <div className="years">cars</div>
          <div className="content">
            {vehicleloading ? (
              <MiniLoader />
            ) : (
              <>
                <h4>Vechile of {customer.customer_first_name}</h4>
                <div className="text">
                  <CustomerVhicle
                    results={results}
                    deletestatus={deletestatus}
                    setDeleteStatus={setDeleteStatus}
                  />
                </div>
              </>
            )}
          </div>
        </div>
        <div className="history-block">
          <div className="years">Orders</div>
          {orderloading ? (
            <MiniLoader />
          ) : (
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
                      <tbody>
                        {orderData.map((order) => (
                          <React.Fragment key={order.order_id}>
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
                                {order.order_status == 1 ? (
                                  <span className="status-chip status-completed">
                                    <FaCheckCircle className="me-1" /> Completed
                                  </span>
                                ) : order.order_status == 0 ? (
                                  <span className="status-chip status-inprogress">
                                    <FaTimesCircle className="me-1" /> In
                                    Progress
                                  </span>
                                ) : (
                                  <span className="status-chip status-reserved">
                                    <FaCalendarCheck className="me-1" />{" "}
                                    Reserved
                                  </span>
                                )}
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
                                  <Button
                                    variant="danger"
                                    size="sm"
                                    onClick={() => handleDelete(order.order_id)}
                                  >
                                    <Link to={``}>Delete</Link>
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          </React.Fragment>
                        ))}
                      </tbody>
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
          )}
        </div>
      </div>
    </section>
  );
}

export default CustomerProfile;
