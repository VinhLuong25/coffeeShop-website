import React from "react";
import styled from "styled-components";
import BackToShop from "../../../components/BackToShop/BackToShop";

export default function SubTotal({ value }) {
  const { subTotal, clearCart } = value;
  return (
    <TotalCart>
      <div>
        <button className="clear-button" onClick={() => clearCart()}>
          Clear Cart
        </button>
        <strong>
          <p className="total">
            Total: $<span>{subTotal} AUD</span>
          </p>
        </strong>
      </div>
      <BackToShop />
    </TotalCart>
  );
}

const TotalCart = styled.div`
  width: 80%;
  margin: 20px auto;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  .total {
    font-size: 28px;
    margin: 18px auto;
  }
  .clear-button {
    background-color: #060005;
    color: white;
    font-size: 24px;
    border: 0;
  }

  @media screen and (max-width: 400px) {
    .total {
      font-size: 22px;
    }
    .clear-button {
      font-size: 20px;
    }
  }
`;
