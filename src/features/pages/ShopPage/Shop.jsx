import React from "react";
import ProductList from "./ProductList";
import { ProductConsumer } from "../../../context";
import "./ShopPage.css";
import Title from "../../../components/Title";
import ProductFilter from "./ProductFilter";

export default function Shop() {
  return (
    <div className="containers">
      <Title name="shop" />

      <div>
        <ProductConsumer>
          {(value) => {
            const { products, sortedProduct } = value;
            return (
              <>
                <ProductFilter product={products} />
                <div className="product-list">
                  <ProductList product={sortedProduct} />
                </div>
              </>
            );
          }}
        </ProductConsumer>
      </div>
    </div>
  );
}
