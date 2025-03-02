import React, { useEffect, useState } from "react";

const ApiConsume = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/postsssssss")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(`Error: ${error}`));
  }, []);

  return (
    <>
      <h1>Api Consume</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.title}
            <br />

            <label>{item.body}</label>
            <br />
            <br />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ApiConsume;

// crud
// read
// create
// update
// delete
