import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { FaSearch, FaHandPointUp } from "react-icons/fa";
import { fetchVechile } from "../../../../../services/vehicle.service";

function SelectVehicleComponent({
  id,
  setnewCustomer,
  newCustomer,
  setSelectedVhicle,
}) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchVechile(id).then((res) => setResults(res));
  }, [id, newCustomer]);

  return (
    <>
      <section className="contact-section p-0  pl-3 responsive-form container mt-5 ">
        <div className="auto-container contact-title ml-6 pl-5  shadow p-4 add-vechile mr-3">
          <h2>Choose a Vehicle</h2>

          <div className="container mt-5">
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
                      <th>choose</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((vehicle, index) => (
                      <tr
                        key={index}
                        onMouseDown={() => setSelectedVhicle(vehicle)}
                      >
                        <td>{vehicle.vehicle_year}</td>
                        <td>{vehicle.vehicle_make}</td>
                        <td>{vehicle.vehicle_model}</td>
                        <td>{vehicle.vehicle_type}</td>
                        <td>{vehicle.vehicle_mileage}</td>
                        <td>{vehicle.vehicle_tag}</td>
                        <td>{vehicle.vehicle_serial}</td>
                        <td>{vehicle.vehicle_color}</td>
                        <td>
                          <FaHandPointUp size={22} />
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
            <Button
              className="theme-btn btn-style-one"
              onClick={() => setnewCustomer(true)}
            >
              ADD NEW VEHICLE
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default SelectVehicleComponent;

//
