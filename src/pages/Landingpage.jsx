import React from "react";
import Sidebar from "../components/Sidebar";
import Button from "../components/Button";
import Card from "../components/Card";

const Landingpage = () => {
  return (
    <div>
      <Sidebar />

      <Card title="Card title1111" name="Card name3333" img="./image.png" />
      <Card title="Card title22222" name="Card name222" img="./image2.png" />
      <Card title="Card title44444" name="Card name1111" />
      <Card title="Card 5555555" name="Card name6666" />
      <Card title="Card title 55555343434" name="Card name4444" />
      <Card title="Card title 3434343" name="Card name77777" />
    </div>
  );
};

export default Landingpage;
