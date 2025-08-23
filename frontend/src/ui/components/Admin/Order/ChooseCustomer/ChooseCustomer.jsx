import React, { useState } from "react";
import CustomerSearch from "./CustomerSearch";
import SelectedCustomer from "../../Order/ChooseCustomer/SelectedCustomer";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Addvehicle from "../ChooseVechice.jsx/AddVechile";

function ChooseCustomer({ selectedCustomer, setSelectedCustomer }) {
  const [query, setQuery] = useState("");
  const [focus, setFocus] = useState(false);
  const navigate = useNavigate();

  return (
    <section>
      <div className="auto-container contact-title ml-6 pl-5">
        <h2>Create a new order</h2>
      </div>

      {!selectedCustomer ? (
        <CustomerSearch
          query={query}
          setQuery={setQuery}
          onSelectCustomer={(customer) => setSelectedCustomer(customer)}
          focus={focus}
          setFocus={setFocus}
          navigate={navigate}
        />
      ) : (
        <SelectedCustomer
          user={selectedCustomer}
          onClose={() => {
            setSelectedCustomer(null);
            setFocus(false);
          }}
        />
      )}
    </section>
  );
}

export default ChooseCustomer;
