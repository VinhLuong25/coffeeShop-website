import React from "react";
import BackToShop from "../../../components/BackToShop/BackToShop";
import { ProductConsumer } from "../../../context";
import "./Detail.css";
function Detail() {
  return (
    <ProductConsumer>
      {(value) => {
        // console.log(value.detailProduct);
        const { id, title, img, inCart, info, price } = value.detailProduct;
        return (
          <div className="detail-container">
            <img src={img} alt="" className="img-detail" />
            <div className="des-container">
              <p className="title-detail">{title}</p>
              <p className="price-detail">${price}</p>
              <button
                className="addToCart"
                disabled={inCart ? true : false}
                // style={
                //   inCart
                //     ? { background: "transparent" }
                //     : { background: "#dbecea" }
                // }
                onClick={() => value.handleCart(id)}
              >
                {inCart ? "In Cart" : "add to cart"}
              </button>
              <p className="info">{info}</p>
              <BackToShop />
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
}

export default Detail;
