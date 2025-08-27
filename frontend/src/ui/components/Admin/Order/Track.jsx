import React, { useState } from "react";


function TrackOrderInput({ onSubmit, }) {
  const [orderId, setOrderId] = useState("");

  const handleChange = (e) => setOrderId(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (orderId.trim()) {
      onSubmit(orderId);
    }
  };

  return (
    <form
      className="track-order-wrapper d-flex align-items-center justify-content-center"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Paste your Order ID here..."
        value={orderId}
        onChange={handleChange}
      />
      <button type="submit">Track</button>
    </form>
  );
}

export default TrackOrderInput;
