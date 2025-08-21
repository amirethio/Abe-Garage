import React, { useState } from "react";
import CustomerSearch from "./CustomerSearch";
import SelectedCustomer from "./SelectedCustomer";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function ChooseCustomer() {
  const [query, setQuery] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [focus, setFocus] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="contact-section custom-bg pl-5 responsive-form">
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
