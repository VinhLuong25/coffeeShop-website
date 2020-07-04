import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../../context";

function Product({ item }) {
  const { id, title, img, price, inCart } = item;

  return (
    <ProductConsumer>
      {(value) => {
        return (
          <div className="img-container">
            <Link to="/main/details" onClick={() => value.handleDetail(id)}>
              <img src={img} alt="" className="img-product" />
            </Link>
            <div className="title">{title}</div>
            <div className="price">${price}</div>

            <div className="buttons">
              <Link to="/main/details" onClick={() => value.handleDetail(id)}>
                <button className="findOut">More Details</button>
              </Link>

              <button
                className="addCart"
                disabled={inCart ? true : false}
                onClick={() => {
                  value.handleCart(id);
                  value.openPopUp(id);
                }}
              >
                {inCart ? "In cart" : "Add To Cart"}
              </button>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
}

Product.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};
export default Product;
