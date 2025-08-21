import React, { useEffect, useState } from "react";
import {
  updateEmployee,
  singleEmployee,
} from "./../../../services/employee.service";
import {  useParams } from "react-router-dom";




function EditEmployeeForm() {
  const { id } = useParams();
  const InitalialState = {
    employee_id: id,
    employee_first_name: "",
    employee_last_name: "",
    employee_phone: "",
    company_role_id: 1,
    active_employee: 1,
  };
  const [formData, setFormData] = useState(InitalialState);
  const [errors, setErrors] = useState({});
  const [ServerError, setServerError] = useState("");
  const [sucess, setSucess] = useState("");
const [employee , setEmployee] =  useState({})

// functions to handle changes
  function handleChange(event) {
    setErrors({});
    const { value, name } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  const handleChange1 = (event) => {
    if (event.target.checked ==  true){
      setFormData((prev) => ({
        ...prev,
        active_employee:1,
      }));
    }else{
      setFormData((prev) => ({
        ...prev,
        active_employee: 0,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.employee_first_name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.employee_first_name)) {
      newErrors.name = "Name must contain only letters";
    }
    if (!formData.employee_phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10,}$/.test(formData.employee_phone)) {
      newErrors.phone = "Phone number must be at least 10 digits";
    }
    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validateResponse = validateForm();
    if (Object.keys(validateResponse).length > 0) {
      setErrors(validateResponse);
      return;
    }
    try {
      const data = await updateEmployee(formData);
      if (data.success == "false") {
        setServerError(data.error);
        setFormData(InitalialState);
        return;
      }
      setSucess("Updated sucessfully");
      setFormData(InitalialState)
    } catch (error) {
      setServerError(error.message || "Submission failed");
    }
  };

  useEffect(()=>{
 singleEmployee(id).then((res) => setEmployee(res[0]));
 
 
  },[sucess , id])

  return (
    <section className="contact-section custom-bg pl-5 responsive-form">
      <div className="auto-container contact-title ml-6 pl-5">
        <h2 style={{marginBottom:"30px"}}>
          Edit :{" "}
          {employee?.employee_first_name + " " + employee?.employee_last_name}
        </h2>
        <h3 style={{marginBottom:"30px"}}>Employee Email : {employee?.employee_email}</h3>
        {ServerError && (
          <div className="d-flex mt-3">
            <div
              className="alert alert-danger py-2 px-3 shadow-sm"
              role="alert"
            >
              {ServerError}
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
        <div className="row clearfix">
          <div className="form-column col-lg-7 col-md-12">
            <div className="inner-column">
              <div className="contact-form">
                <form id="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="row clearfix bg-light">
                    <div className="form-group col-12">
                      <input
                        type="text"
                        name="employee_first_name"
                        value={formData.employee_first_name}
                        placeholder="Employee first name"
                        onChange={handleChange}
                      />
                      {errors.name && (
                        <div className="text-danger small mt-2">
                          {errors.name}
                        </div>
                      )}
                    </div>
                    <div className="form-group col-12">
                      <input
                        type="text"
                        name="employee_last_name"
                        value={formData.employee_last_name}
                        placeholder="Employee last name"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group col-12">
                      <input
                        type="text"
                        name="employee_phone"
                        value={formData.employee_phone}
                        onChange={handleChange}
                        placeholder="Employee phone(555-555-5555)"
                      />
                      {errors.phone && (
                        <div className="text-danger small mt-2">
                          {errors.phone}
                        </div>
                      )}
                    </div>
                    <div className="form-group col-12">
                      <select
                        value={formData.company_role_id}
                        name="company_role_id"
                        onChange={handleChange}
                      >
                        <option value="1">Employee</option>
                        <option value="2">Manager</option>
                        <option value="3">Admin</option>
                      </select>
                    </div>
                    <div className="form-group col-12">
                      <input
                        type="checkbox"
                        id="activeCheck"
                        name="vehicle3"
                        checked={formData.active_employee}
                        onChange={handleChange1}
                      />
                      <label for="activeCheck">
                        {" "}
                        <h5>&nbsp; Is active Employee</h5>
                      </label>
                      <br></br>
                    </div>

                    <div className="form-group col-12">
                      <button
                        className="theme-btn btn-style-one w-100"
                        type="submit"
                        data-loading-text="Please wait..."
                      >
                        <span>UPDATE EMPLOYEE</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="info-column col-lg-4 d-none d-lg-block"></div>
        </div>
      </div>
    </section>
  );
}

export default EditEmployeeForm;
