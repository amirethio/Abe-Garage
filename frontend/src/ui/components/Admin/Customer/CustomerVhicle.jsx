import React from "react";
import { Table, Button } from "react-bootstrap";
import { FaSearch, FaHandPointUp } from "react-icons/fa";
import { Link } from "react-router-dom";

function CustomerVhicle({ order }) {
  return (
    <>
      <section className=" p-0  pl-3 responsive-form container mt-4 ">
        <div className="auto-container contact-title ml-6 pl-5  shadow p-1 add-vechile mr-3">
          <div className="container mt-4">
            <Table striped bordered hover responsive>
              <>
                <thead>
                  <tr>
                    <th>year</th>
                    <th>make</th>
                    <th>type</th>
                    <th>mileage</th>
                    <th>model</th>
                    <th>tag</th>
                    <th>serial</th>
                    <th>color</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{order.vehicle_year}</td>
                    <td>{order.vehicle_make}</td>
                    <td>{order.vehicle_type}</td>
                    <td>{order.vehicle_mileage}</td>
                    <td>{order.vehicle_model}</td>
                    <td>{order.vehicle_tag}</td>
                    <td>{order.vehicle_serial}</td>
                    <td>{order.vehicle_color}</td>
                  </tr>
                </tbody>
              </>
            </Table>
          </div>
        </div>
      </section>
    </>
  );
}

export default CustomerVhicle;

//
