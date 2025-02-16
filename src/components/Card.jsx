import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="card" style={{ width: "10rem" }}>
        <img
          src={props.img}
          className="card-img-top"
          alt="..."
          style={{ width: "100%", height: "200px" }}
        />
        <div className="card-body">
          <p className="card-text">{props.name}</p>
          <a href="#" className="btn btn-primary">
            {props.title}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
