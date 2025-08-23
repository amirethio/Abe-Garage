import React, { useState } from "react";
import Addvehicle from "./AddVechile";
import SelectedVhicleComponent from "./SelectedVhicleComponent";
import SelectVehicleComponent from "./SelectVehicleComponent";

function ChooseVehicle({
  selectedCustomer,
  SelectedVhicle,
  setSelectedVhicle,
}) {
  const [newCustomer, setnewCustomer] = useState(false);

  return (
    <>
      {selectedCustomer &&
        (SelectedVhicle ? (
          <div>
            <SelectedVhicleComponent
              SelectedVhicle={SelectedVhicle}
              setSelectedVhicle={setSelectedVhicle}
            />
          </div>
        ) : (
          <>
            {newCustomer ? (
              <div>
                <Addvehicle
                  id={selectedCustomer?.customer_id}
                  newCustomer={newCustomer}
                  setnewCustomer={setnewCustomer}
                />
              </div>
            ) : (
              <div>
                <SelectVehicleComponent
                  id={selectedCustomer?.customer_id}
                  setnewCustomer={setnewCustomer}
                  setSelectedVhicle={setSelectedVhicle}
                />
              </div>
            )}
          </>
        ))}
    </>
  );
}

export default ChooseVehicle;
