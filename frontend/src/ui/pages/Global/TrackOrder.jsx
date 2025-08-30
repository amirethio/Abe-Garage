import React from 'react'
import Track from '../../components/Admin/Order/Track'
import { useState } from 'react';
import OrderProfile from '../../components/Admin/Order/OrderProfile';

function TrackOrder() {
const [hash, sethash] = useState("");

  return (
    <div className=" pt-5 " style={{minHeight:"70vh"}}>
      <Track sethash={sethash} />
      <div>{hash && <OrderProfile hash={hash} />}</div>
    </div>
  );
}

export default TrackOrder