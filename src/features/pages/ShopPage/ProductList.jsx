import React from "react";
import Product from "./Product";

export default function ProductList({ product }) {
  return (
    <>
      {product.map((item) => {
        return <Product key={item.id} item={item} />;
      })}
    </>
  );
}
