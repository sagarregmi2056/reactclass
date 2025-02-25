import React, { useState } from "react";

const FormHandling = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(password);

    console.log("Form submitted");
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <h2>Form Handling</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <br />
        <input
          type="password"
          value={password}
          placeholder="Enter your password"
          onChange={(e) => setpassword(e.target.value)}
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormHandling;
