import React from "react";
import { useContext } from "react";
import { ProductContext } from "../../../context";
export default function ProductFilter({ product }) {
  let context = useContext(ProductContext);
  let {
    type,
    handleChange,
    handleCategory,
    category,
    sort,
    handleSort,
  } = context;
  const getUnique = (items, value) => {
    return [...new Set(items.map((item) => item[value]))];
  };
  let types = getUnique(product, "type");
  types = ["All", ...types];
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let tempProduct = [...product];
  tempProduct = tempProduct.filter((item) => item.type === type);
  let categories = getUnique(tempProduct, "category");
  categories = ["All", ...categories];
  categories = categories.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  return (
    <div>
      <form className="form">
        <div className="filter-container">
          <p className="title">View By</p>
          <select
            name="type"
            id="type"
            value={type}
            className="type-view"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        <div className="filter-container">
          <p className="title">filter </p>
          <select
            name="category"
            id="category"
            value={category}
            className="category-view"
            onChange={handleCategory}
          >
            {categories}
          </select>
        </div>
        <div className="filter-container">
          <p className="title">Sort by</p>
          <select
            name="sort"
            id="sort"
            value={sort}
            className="category-view"
            onChange={handleSort}
          >
            <option value="featured">Featured</option>
            <option value="alphabetical">Alphabetical</option>
            <option value="asc">Low To High</option>
            <option value="des">High To Low</option>
          </select>
        </div>
      </form>
    </div>
  );
}
