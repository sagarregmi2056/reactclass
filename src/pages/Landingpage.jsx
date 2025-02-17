import React from "react";
import Sidebar from "../components/Sidebar";

import Card from "../components/Card";

const Landingpage = () => {
  return (
    <div>

    <Hero/>

      <Card title="Card title1111" name="Card name3333" img="./image.png" />
      <Card title="Card title22222" name="Card name222" img="./image2.png" />
      <Card title="Card title44444" name="Card name1111" img="./image.png" />
      <Card title="Card 5555555" name="Card name6666" img="./image2.png" />
      <Card
        title="Card title 55555343434"
        name="Card name4444"
        img="./image.png"
      />
      <Card
        title="Card title 3434343"
        name="Card name77777"
        img="./image2.png"
      />
    </div>
  );
};

export default Landingpage;
