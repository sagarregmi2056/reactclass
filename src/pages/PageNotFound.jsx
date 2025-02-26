import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>

      {/* <a href="/hero">Go back to the home page from a tag</a> */}
      <br />
      <br />
      <Link to="/hero">Go back to the home page from link tag</Link>
    </div>
  );
};

export default PageNotFound;
