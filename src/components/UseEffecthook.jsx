import React, { useEffect, useState } from "react";

const UseEffecthook = () => {
  const [name, setname] = useState("sudeep devkota");
  const [age, setage] = useState(25);

  const changemyname = () => {
    setname("sagar regmi");
  };
  const changeage = () => {
    setage(26);
  };

  useEffect(() => {
    console.log("useEffect called");
  }, [name, age]);

  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <button onClick={changemyname}>Change Name</button>
      <button onClick={changeage}>Change Age</button>
      <h2>UseEffect Hook</h2>
    </div>
  );
};

export default UseEffecthook;

// function ,dependencies===name
// first time page load huda

// name setname '
// onClick={()=> setname("sagar regmi")}

// page refresh huni bitikai chalyo
// page katai pani changes aayo vanya ,update vayo vanya useffect chaldo raixa

// a = b = c = d
// useContext hook use garxau
// form handling
