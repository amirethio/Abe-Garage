import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Button, Form } from "react-bootstrap";
import {
  addServices,
  fetchService,
  deleteService,
} from "./../../../services/service.service";
import Loader, { LargeLoader } from "../Loader";
const ServicesSection = () => {
  const InitalialState = {
    service_name: "",
    service_description: "",
  };
  const [formData, setformData] = useState(InitalialState);
  const [sucess, setsucess] = useState("");
  const [error, setErrors] = useState("");
  const [data, setData] = useState([]);
  const [IsDelete, setIsDelete] = useState(false);
  const [loading, setLoading] = useState(true);

  function handleChnage(event) {
    setformData((pre) => ({
      ...pre,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setsucess("");
    setErrors("");
    const result = await addServices(formData);
    setformData(InitalialState);
    if (result.sucess == true) {
      setsucess(result.message);
    } else {
      setErrors(result.message);
    }
  }

  const handleDelete = (id) => {
    deleteService(id).then(() => {
      setIsDelete((pre) => !pre);
    });
  };

  useEffect(() => {
    fetchService().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, [sucess, error , IsDelete]);

  if (loading) {
    return <LargeLoader />;
  }
  return (
    <section className="contact-section custom-bg pl-5 responsive-form">
      <div className="auto-container contact-title ml-6 pl-5">
        <h2>Services we provide</h2>
        <p>
          Bring to the table win-win survival strategies to ensure proactive
          domination. At the end of the day, going forwant, a new normal that
          has evolved from generation X is on the runway heading towards a
          streamlined cloud solution
        </p>

        {data ? (
          data.map((service, index) => (
            <div className="d-flex justify-content-between align-items-start border rounded p-3 mb-3 shadow-sm bg-white">
              <div key={index}>
                <h5 className="mb-2">{service?.service_name}</h5>
                <p className="mb-0 text-muted">
                  {service?.service_description}
                </p>
              </div>

              <div className="ms-3">
                <button className="btn btn-outline-primary btn-sm rounded-circle me-2">
                  <FaEdit />
                </button>
                <button
                  className="btn btn-outline-danger btn-sm rounded-circle"
                  onClick={() => handleDelete(service.service_id)}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))
        ) : (
          <h2>no data found</h2>
        )}

        <div className="bg-white border rounded p-4 shadow-sm mt-4">
          <h2 className="mb-3">Add a New Service</h2>
          {error && (
            <div className="d-flex mt-3">
              <div
                className="alert alert-danger py-2 px-3 shadow-sm"
                role="alert"
              >
                {error}
              </div>
            </div>
          )}
          {sucess && (
            <div className="d-flex mt-3">
              <div
                className="alert alert-success py-2 px-3 shadow-sm"
                role="alert"
              >
                {sucess}
              </div>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-controlu form-group col-12"
                placeholder="Service name"
                value={formData.service_name}
                onChange={handleChnage}
                name="service_name"
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-controlu"
                rows="3"
                placeholder="Service description"
                value={formData.service_description}
                onChange={handleChnage}
                name="service_description"
              ></textarea>
            </div>
            <button type="submit" className=" theme-btn btn-style-one">
              ADD SERVICE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
