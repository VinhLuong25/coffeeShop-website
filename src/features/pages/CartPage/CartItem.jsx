import React from "react";

export default function CartItem({ item, value }) {
  const { id, img, price, title, count, total } = item;
  const { increment, decrement, remove } = value;
  return (
    <>
      <div className="item-container">
        <div className="image-title">
          <div className="col-1">
            <img src={img} alt="" className="cart-img" />
          </div>
          <div className="col-2">
            <p className="title">{title}</p>
            <p className="price">${price}</p>
          </div>
        </div>

        <div className="quantity-container">
          <div className="col-3">
            <p style={{ fontSize: "16px" }}>
              <strong>
                Quantity: <span>{count} </span>
              </strong>
            </p>
            <div className="quantity">
              <div className="btn-arrow" onClick={() => increment(id)}>
                <i
                  className="fa fa-chevron-up"
                  style={{ fontSize: "12px" }}
                ></i>
              </div>
              <div className="btn-arrow" onClick={() => decrement(id)}>
                <i
                  className="fa fa-chevron-down"
                  style={{ fontSize: "12px" }}
                ></i>
              </div>
            </div>
          </div>
          <div className="col-4">
            <button className="remove" onClick={() => remove(id)}>
              remove <i className="fa fa-remove"></i>
            </button>
          </div>
          <div className="col-5">
            <p className="title" style={{ marginLeft: "10px" }}>
              ${total}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
