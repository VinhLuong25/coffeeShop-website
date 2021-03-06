import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../context";

const BurgerBtn = styled.div`
  margin-left: auto;
  margin-right: 18px;
  width: 35px;
  height: 25px;
  position: absolute;
  cursor: pointer;
  right: 30px;
  z-index: 5;

  span {
    display: inline-block;
    position: absolute;
    height: 5px;
    width: 100%;
    background: grey;
    border-radius: 8px;
    opacity: 1;
    left: 0;
    transition: 0.25s ease-in-out;
  }
  span:nth-child(1) {
    top: ${({ open }) => (open ? "10px" : "0px")};
    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
  }
  span:nth-child(2) {
    top: 10px;
    opacity: ${({ open }) => (open ? "0" : "1")};
    left: ${({ open }) => (open ? "-30px" : "0")};
  }
  span:nth-child(3) {
    top: ${({ open }) => (open ? "10px" : "20px")};
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
  }
  @media screen and (max-width: 1100px) {
    right: 20px;
  }
  @media screen and (max-width: 400px) {
    right: 10px;
  }
`;

const List = styled.div`
  .myList {
    /* display: block; */
    position: fixed;
    text-transform: capitalize;
    list-style: none;
    left: 0px;
    top: 0px;
    width: 35%;
    height: 100%;
    border-right: #ccc 1px solid;
    background: #f2f2f2;
    z-index: 4;
    opacity: 0.7;
    padding: 10px;
    transition: 0.3s ease-in-out;
    transform: ${({ open }) =>
      open ? "translateX(0px)" : "translateX(-700px)"};
  }

  li a,
  li span {
    display: inline-block;
    text-decoration: none;
    padding-right: 60px;
    color: black;

    letter-spacing: 2px;
    font-size: 25px;
    font-weight: bold;
  }

  li {
    display: flex;
    position: relative;
    justify-content: flex-start;
    align-items: center;
    text-align: left;
    left: 50%;
    top: 10%;
    transform: translateX(-50%);

    padding: 20px;
    border-bottom: rgb(203, 200, 200) 1px solid;
  }
  li:last-child {
    border-bottom: 0;
  }
  @media screen and (max-width: 740px) {
    li a {
      font-size: 17px;
    }
  }
  @media screen and (max-width: 420px) {
    .myList {
      width: 100%;
      background: #f2f2f2;
      z-index: 4;
      opacity: 1;
    }
    li a {
      font-size: 15px;
    }
  }
`;
export default function Burger() {
  const [open, setOpen] = useState(false);
  const { userData, setUserData } = useContext(ProductContext);
  const logOut = () => {
    setUserData({
      token: null,
      user: null,
    });
    localStorage.setItem("auth-token", "");
    setOpen(false);
  };
  const closeMenu = () => {
    setOpen(false);
  };
  return (
    <>
      <List open={open}>
        <div className="myList">
          <li>
            <Link to="/main" onClick={closeMenu}>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/main/shop" onClick={closeMenu}>
              <span> Shop</span>
            </Link>
          </li>
          <li>
            <Link to="/main/story" onClick={closeMenu}>
              <span>Story</span>
            </Link>
          </li>
          <li>
            {userData.user ? (
              <span onClick={logOut}>Log Out</span>
            ) : (
              <span>
                <Link to="/main/login" onClick={closeMenu}>
                  <span>Login</span>
                </Link>
                <Link to="/main/register" onClick={closeMenu}>
                  <span>Register</span>
                </Link>
              </span>
            )}
          </li>
        </div>
      </List>
      <BurgerBtn open={open} onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </BurgerBtn>
    </>
  );
}
