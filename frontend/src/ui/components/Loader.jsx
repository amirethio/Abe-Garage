import React from "react";
import { ScaleLoader } from "react-spinners";


export const MiniLoader = ()=>{
    return (
      <div
        style={{
          //   position: "fixed",
          //   inset: 0,
          backgroundColor: "#F6F7FA",
          zIndex: 1050,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          padding: "50px",
        }}
        className="me"
      >
        <ScaleLoader />
      </div>
    );
}
export const LargeLoader = () => {
  return (
    <div
      style={{
          inset: 0,
        backgroundColor: "rgba(255, 255, 255, 0.82)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height:"100vh",
        paddingBottom:"30vh"
      }}

    >
      <ScaleLoader />
    </div>
  );
};
function Loader() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(255,255,255,0.7)",
        zIndex: 1050,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ScaleLoader />
    </div>
  );
}

export default Loader;


