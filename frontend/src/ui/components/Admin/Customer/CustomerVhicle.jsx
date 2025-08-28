import React from "react";
import { Table, Button } from "react-bootstrap";
import { FaSearch, FaHandPointUp } from "react-icons/fa";
import { Link } from "react-router-dom";

function CustomerVhicle({ results }) {
  return (
    <>
      {/* <section className=" p-0  pl-3 responsive-form container mt-4 ">
        <div className="auto-container contact-title ml-6  shadow p-1 add-vechile mr-3"> */}
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
                  {results.map((result) => (
                    <tr>
                      <td>{result?.vehicle_year}</td>
                      <td>{result?.vehicle_make}</td>
                      <td>{result?.vehicle_type}</td>
                      <td>{result?.vehicle_mileage}</td>
                      <td>{result?.vehicle_model}</td>
                      <td>{result?.vehicle_tag}</td>
                      <td>{result?.vehicle_serial}</td>
                      <td>{result?.vehicle_color}</td>
                    </tr>
                  ))}
                </tbody>
              </>
            </Table>
          </div>
        {/* </div>
      </section> */}
    </>
  );
}

export default CustomerVhicle;

//
