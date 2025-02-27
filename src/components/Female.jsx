import React from "react";

const Female = () => {
  return (
    <div>
      <h1>Female</h1>
      <p>This is the female product list.</p>
      {/* add female product list */}

      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        {/* add female product list items */}
        <li>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLQ5HJNwzBdhPOH98kWUsJqo9o4ubZdLBPkw&s"
            alt="Product"
          />
          <h3>Product 1</h3>
          <p>Price: $10</p>
          <button>Add to Cart</button>
        </li>
      </ul>
    </div>
  );
};

export default Female;
