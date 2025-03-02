import axios from "axios";
import React, { useEffect, useState } from "react";

const Getid = () => {
  const [getdata, setdata] = useState([]);

  useEffect(() => {
    axios
      .get(`https://66712b38e083e62ee43a5e4f.mockapi.io/bihanakoclass/`)
      .then((response) => response.data)
      .then((json) => setdata(json))
      .catch((error) => console.log(`Error: ${error}`));
  }, []);
  return (
    <div>
      this is get data page
      <ul>
        {getdata.map((item) => (
          <li key={item.id}>
            {item.username}
            <br />
            {item.password}
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Getid;

// useparams hook
