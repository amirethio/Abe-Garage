import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { FaSearch, FaHandPointUp } from "react-icons/fa";
import {
  deleteVehicle,
} from "../../../../services/vehicle.service";
import { Link } from "react-router-dom";

function CustomerVhicle({ results, setDeleteStatus }) {
  const handleDelete = (id) => {
    deleteVehicle(id).then(() => {
      setDeleteStatus((pre) => !pre);
    });
  };

  return (
    <>
      <section className=" p-0  pl-3 responsive-form container mt-4 ">
        <div className="auto-container contact-title ml-6 pl-5  shadow p-1 add-vechile mr-3">
          <div className="container mt-4">
            <Table striped bordered hover responsive>
              {results.length > 0 ? (
                <>
                  <thead>
                    <tr>
                      <th>year</th>
                      <th>make</th>
                      <th>model</th>
                      <th>type</th>
                      <th>mileage</th>
                      <th>tag</th>
                      <th>serial</th>
                      <th>color</th>
                      <th>EDIT/ DELETE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((vehicle, index) => (
                      <tr key={index}>
                        <td>{vehicle.vehicle_year}</td>
                        <td>{vehicle.vehicle_make}</td>
                        <td>{vehicle.vehicle_model}</td>
                        <td>{vehicle.vehicle_type}</td>
                        <td>{vehicle.vehicle_mileage}</td>
                        <td>{vehicle.vehicle_tag}</td>
                        <td>{vehicle.vehicle_serial}</td>
                        <td>{vehicle.vehicle_color}</td>
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
                              onClick={() => {
                                handleDelete(vehicle.vehicle_id);
                              }}
                            >
                              <Link to={``}>Delete</Link>
                            </Button>
                          </div>{" "}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </>
              ) : (
                <tbody>
                  <tr>
                    <td colSpan={8} className="text-center py-3">
                      No Vehicle found
                    </td>
                  </tr>
                </tbody>
              )}
            </Table>
          </div>
        </div>
      </section>
    </>
  );
}

export default CustomerVhicle;

//
