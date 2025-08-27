import React from 'react'
import Track from '../../components/Admin/Order/Track'
import CustomerProfile from '../../components/Admin/Customer/CustomerProfile'
import { useState } from 'react';

function TrackOrder() {
const [data , setData] = useState("")

  return (
    <div className="d-flex flex-column align-items-center justify-content-center pt-5">
      <Track />
      {/* <CustomerProfile/> */}
    </div>
  );
}

export default TrackOrder