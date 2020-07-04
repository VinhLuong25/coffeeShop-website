import React from "react";
import { ProductConsumer } from "../../../context";
import "./Cart.css";
import CartList from "./CartList";
import EmptyCart from "./EmptyCart";
import BackToShop from "../../../components/BackToShop/BackToShop";
import Title from "../../../components/Title";
import SubTotal from "./SubTotal";
export default function Cart() {
  return (
    <ProductConsumer>
      {(value) => {
        const { cart } = value;

        if (cart.length <= 0) {
          return (
            <div
              style={{
                margin: "0px auto",
                width: "70%",
                textAlign: "center",
                padding: "60px",
              }}
            >
              <EmptyCart />
              <BackToShop />
            </div>
          );
        } else {
          return (
            <div>
              <Title name="your bag" />
              <CartList value={value} />
              <SubTotal value={value} />
            </div>
          );
        }
      }}
    </ProductConsumer>
  );
}
