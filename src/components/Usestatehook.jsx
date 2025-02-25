import React, { useState } from "react";
import "./Usestatehook.css";

const Usestatehook = () => {
  // initialize state
  const [chor1, chor2] = useState("sudeep devkota");

  // function to change the state

  const manxeyAyo = () => {
    chor2("sagar regmi");
  };

  return (
    <div>
      <h2>{chor1}</h2>
      <button className="bg-primary" onClick={manxeyAyo}>
        samatyo
      </button>
    </div>
  );
};

export default Usestatehook;

// usestate hook duita array provide

// name = array 0   = "sudeep devkota"
// setname =array 1 = "sagar"

// name = sagar

// useeffect hook monday
// usecontext hook tuesday
// react router dom wednesday
// api consume thruday
// friday api consume
// saturday project
// sunday project
// project completion
