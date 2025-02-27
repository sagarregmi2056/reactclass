// usenavigate hook
// child
import React from "react";
import { Link, useNavigate } from "react-router-dom";

// function navigateme() {
//   window.history.back();
// }

const Usenavigatehook = () => {
  const malailagdey = useNavigate();

  const urlmalagdey = (url) => {
    malailagdey(url);
  };

  const checkroleandredirect = () => {
    const role = "adminaaaa";
    if (role === "admin") {
      urlmalagdey("/contact");
    } else {
      urlmalagdey("/hero");
    }
  };

  return (
    <div>
      <h1>Usenavigatehook</h1>
      <Link to="/contact">contact us page</Link>
      {/* <button>Go back</button> */}
      <button onClick={() => checkroleandredirect()}>login user/admin</button>
      <br />
      {/* <button onClick={() => urlmalagdey("/contact")}>
        Go back to contact
      </button>{" "}
      <br />
      <button onClick={() => urlmalagdey("/hero")}>Go back to hero</button> */}
      <button onClick={() => malailagdey("/contact")}>Go back contact</button>
    </div>
  );
};

export default Usenavigatehook;
