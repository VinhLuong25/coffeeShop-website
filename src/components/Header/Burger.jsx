import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BurgerBtn = styled.div`
  margin-left: auto;
  margin-right: 18px;
  width: 35px;
  height: 25px;
  position: absolute;
  cursor: pointer;
  right: 30px;

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

const List = styled.ul`
  display: block;
  position: fixed;
  text-transform: capitalize;
  list-style: none;
  left: 0px;
  top: 0px;
  width: 35%;
  height: 100%;
  border-right: #ccc 1px solid;
  background: #f2f2f2;
  z-index: 3;
  opacity: 0.7;
  padding: 10px;
  transition: 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0px)" : "translateX(-700px)")};

  li a {
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
    text-align: center;
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
  @media screen and (max-width: 400px) {
    li a {
      font-size: 15px;
    }
  }
`;
export default function Burger() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => {
    setOpen(false);
  };
  return (
    <>
      <List open={open}>
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
          <Link to="/main/login" onClick={closeMenu}>
            <span>Login/Register</span>
          </Link>
        </li>
      </List>
      <BurgerBtn open={open} onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </BurgerBtn>
    </>
  );
}
