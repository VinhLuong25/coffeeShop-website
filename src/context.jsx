import React, { createContext, useState, useEffect } from "react";
import { storeProducts, detailProduct } from "./data.js";
import axios from "axios";
export const ProductContext = createContext();

function ProductProvider(props) {
  const [products, setProduct] = useState([]);
  const [detailProducts, setDetailProducts] = useState(detailProduct);
  const [cart, setCart] = useState([]);
  const [popUpOpen, setPopUpOpen] = useState(false);
  const [popUpProduct, setPopUpProduct] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [myType, setMyType] = useState("All");
  const [myCategory, setMyCategory] = useState("All");
  const [sortedProduct, setSortedProduct] = useState([]);
  const [sort, setSort] = useState("featured");
  const [userData, setUserData] = useState({
    token: null,
    user: null,
  });

  useEffect(() => getStoreProduct(), []);
  useEffect(() => addSubTotal());
  useEffect(() => addTotalCount());
  useEffect(() => {
    let tempProduct = [...storeProducts];

    // filter type
    if (myType !== "All") {
      tempProduct = tempProduct.filter((item) => item.type === myType);
    }

    // filter category
    if (myCategory !== "All") {
      tempProduct = tempProduct.filter((item) => item.category === myCategory);
    }
    //sort by alphabetical, des, asc
    if (sort === "alphabetical") {
      tempProduct = tempProduct.sort((a, b) =>
        a["title"].localeCompare(b["title"])
      );
    } else if (sort === "asc") {
      tempProduct = tempProduct.sort((a, b) => a["price"] - b["price"]);
    } else if (sort === "des") {
      tempProduct = tempProduct.sort((a, b) => b["price"] - a["price"]);
    }
    setSortedProduct(tempProduct);
  }, [myCategory, myType, sort]);

  //authorize user
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await axios.post(
        "http://localhost:4000/auth/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        let userRes = await axios.get("http://localhost:4000/auth", {
          headers: { "x-auth-token": token },
        });
        console.log(userRes.data);

        setUserData({
          token: token,
          user: userRes.data,
        });
      }
    };
    checkLoggedIn();
  }, []);

  const getStoreProduct = () => {
    let tempProduct = [...storeProducts];
    setProduct(tempProduct);
  };

  const getItem = (id) => {
    let product = products.find((item) => item.id === id);
    return product;
  };

  const handleDetail = (id) => {
    const product = getItem(id);

    setDetailProducts(product);
  };

  const addToCart = (id) => {
    let tempProduct = [...products];
    let index = tempProduct.findIndex((item) => item.id === id);
    let product = tempProduct[index];
    product.inCart = true;
    product.count = 1;
    let price = product.price;
    product.total = price;
    let newCart = [...cart];
    newCart.push(product);
    setProduct(tempProduct);
    setCart(newCart);
  };

  const openPopUp = (id) => {
    const product = getItem(id);
    setPopUpOpen(true);
    setPopUpProduct(product);
  };

  const closePopUp = () => {
    setPopUpOpen(false);
    setPopUpProduct([]);
  };

  const increment = (id) => {
    let tempProduct = [...cart];
    let index = tempProduct.findIndex((item) => item.id === id);
    let product = tempProduct[index];
    product.count += 1;
    product.total = product.count * product.price;
    setCart(tempProduct);
  };

  const decrement = (id) => {
    let tempProduct = [...cart];
    let index = tempProduct.findIndex((item) => item.id === id);
    let product = tempProduct[index];
    product.count -= 1;
    product.total = product.count * product.price;
    if (product.count === 0) {
      remove(id);
    } else {
      setCart(tempProduct);
    }
  };

  const remove = (id) => {
    let tempProduct = [...products];
    let tempCart = [...cart];
    tempCart = tempCart.filter((item) => item.id !== id);
    let index = tempProduct.findIndex((product) => product.id === id);
    let removedItem = tempProduct[index];
    removedItem.inCart = false;
    removedItem.count = 0;
    removedItem.total = 0;
    setCart(tempCart);
    setProduct(tempProduct);
  };
  const clearCart = () => {
    setCart([]);
  };

  const addSubTotal = () => {
    let productSubTotal = 0;
    cart.map((item) => {
      productSubTotal += item.total;
      return productSubTotal;
    });
    setSubTotal(productSubTotal);
  };
  const addTotalCount = () => {
    let countInTotal = 0;
    let tempCart = [...cart];
    tempCart.map((item) => {
      countInTotal += item.count;
      return countInTotal;
    });
    setTotalCount(countInTotal);
  };
  const handleChange = (e) => {
    let initialSort = "featured";
    let initialCategory = "All";

    setSort(initialSort);
    setMyCategory(initialCategory);
    setMyType(e.target.value);
  };
  const handleCategory = (e) => {
    setMyCategory(e.target.value);
  };
  const handleSort = (e) => {
    setSort(e.target.value);
  };

  return (
    <ProductContext.Provider
      value={{
        products: products,
        detailProduct: detailProducts,
        popUpOpen: popUpOpen,
        cart: cart,
        handleCart: addToCart,
        handleDetail: handleDetail,
        popUpProduct: popUpProduct,
        openPopUp: openPopUp,
        closePopUp: closePopUp,
        increment: increment,
        decrement: decrement,
        remove: remove,
        subTotal: subTotal,
        clearCart: clearCart,
        totalCount: totalCount,
        handleChange: handleChange,
        type: myType,
        category: myCategory,
        sortedProduct: sortedProduct,
        handleCategory: handleCategory,
        sort: sort,
        handleSort: handleSort,
        userData,
        setUserData,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}
const ProductConsumer = ProductContext.Consumer;
export { ProductConsumer, ProductProvider };
