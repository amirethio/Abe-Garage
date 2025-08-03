import React from "react";

function EmployeeForm() {
  return (
    <section className="contact-section custom-bg pl-5">
      <div className="auto-container contact-title ml-6 pl-5">
        <h2>Add a new Employee</h2>
        <div className="row clearfix">
          <div className="form-column col-lg-7">
            <div className="inner-column">
              <div className="contact-form">
                <form method="post" action="sendemail.php" id="contact-form">
                  <div className="row clearfix bg-light">
                    <span></span>{" "}
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="form_name"
                        // value=""
                        placeholder="Employee email"
                        required
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="form_name"
                        value=""
                        placeholder="Employee email"
                        required
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="email"
                        value=""
                        placeholder="Employee first name"
                        required
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="form_subject"
                        value=""
                        placeholder="Employee last name"
                        required
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="form_subject"
                        value=""
                        placeholder="Employee phone(555-555-5555)"
                        required
                      />
                    </div>
                    <div className="form-group col-md-12 ">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Role</option>
                        <option value="1">Employee</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="form-group col-md-12">
                      <input
                        type="password"
                        name="form_subject"
                        value=""
                        placeholder="* * * * * *"
                        required
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <button
                        className="theme-btn btn-style-one"
                        type="submit"
                        data-loading-text="Please wait..."
                      >
                        <span>ADD EMPLOYEE</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="info-column col-lg-4"></div>
        </div>
      </div>
    </section>
  );
}

export default EmployeeForm;
