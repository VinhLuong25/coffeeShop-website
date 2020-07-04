import React from "react";

export default function EmptyCart() {
  return (
    <div>
      <h1
        style={{
          textTransform: "uppercase",
          letterSpacing: "2.5px",
          fontSize: "40px",
        }}
      >
        Your bag is currently empty
      </h1>
    </div>
  );
}
