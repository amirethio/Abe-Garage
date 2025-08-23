import React, { useEffect, useState } from "react";
import ChooseCustomer from "./ChooseCustomer/ChooseCustomer";
import ChooseVehicle from "./ChooseVechice.jsx/ChooseVehicle";
import ChooseService from "./ChooseService/ChooseService";
import useAuth from "../../../../hook/useAuth";
import { addOrder } from "./../../../../services/order.service";
import { useNavigate } from "react-router-dom";
function Order() {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [SelectedVhicle, setSelectedVhicle] = useState(null);
  const { userData } = useAuth();
  const [selectedService, setSelectedService] = useState({
    price: "",
    services: [],
    additional_request: "",
  });
  const [formData, setFormData] = useState({});
  const [finish, setfinish] = useState(false);
const navigate = useNavigate();
  if (finish) {
    console.log("it finishes and setting");

    setFormData({
      employee_id: userData.employee_id,
      customer_id: selectedCustomer.customer_id,
      vehicle_id: SelectedVhicle.vehicle_id,
      order_services: selectedService.services,
      service_completed: 0,
      order_total_price: selectedService.price,
      estimated_completion_date: "2023-04-28",
      additional_request: selectedService.additional_request,
      order_status: 1,
    });

    setfinish(false);
  }

  useEffect(() => {
    addOrder(formData).then((res) => {
      console.log(res)
      
      if (res.success == true) {
        navigate("/admin/orders");
      }
    });
  }, [formData, navigate]);
  return (
    <>
      <section className="contact-section custom-bg pl-5 responsive-form">
        {console.log(formData)}
        <ChooseCustomer
          selectedCustomer={selectedCustomer}
          setSelectedCustomer={setSelectedCustomer}
        />
        <ChooseVehicle
          selectedCustomer={selectedCustomer}
          setSelectedVhicle={setSelectedVhicle}
          SelectedVhicle={SelectedVhicle}
        />
        {SelectedVhicle && (
          <ChooseService
            selectedService={selectedService}
            setSelectedService={setSelectedService}
            setfinish={setfinish}
          />
        )}
      </section>
    </>
  );
}

export default Order;
