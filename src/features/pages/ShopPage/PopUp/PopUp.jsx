import React from "react";
import { ProductConsumer } from "../../../../context";
import { Link } from "react-router-dom";
import "./PopUp.css";
export default function PopUp() {
  return (
    <ProductConsumer>
      {(value) => {
        const { popUpOpen, closePopUp } = value;
        const { img, price, title } = value.popUpProduct;
        if (!popUpOpen) {
          return null;
        } else {
          return (
            <div className="popUp-container">
              <div className="popUp-section">
                <div>
                  <h2 style={{ textTransform: "capitalize" }}>
                    item added to cart
                  </h2>
                  <img src={img} alt="" className="popUp-img" />
                  <h3>{title}</h3>
                  <h3 className="popUp-price">${price}</h3>
                  <Link to="/main/shop" onClick={() => closePopUp()}>
                    <button>continue shopping</button>
                  </Link>
                  <br />
                  <Link to="/main/cart" onClick={() => closePopUp()}>
                    <button>go to cart</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        }
      }}
    </ProductConsumer>
  );
}
