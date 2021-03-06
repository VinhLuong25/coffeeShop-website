import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context";
const Nav = styled.div`
  .header-container {
    display: flex;
    position: fixed;
    top: 0;
    width: 100%;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    height: 8vh;
    background-color: #dbecea;
    z-index: 3;
    overflow: hidden;
  }
  .logo {
    text-decoration: none;
  }
  .logo h1 {
    margin-left: 20px;
    font-size: 20px;
    color: black;
  }
`;

const Links = styled.div`
  position: relative;
  margin-right: 130px;
  .count {
    position: absolute;
    width: 26px;
    height: 24px;
    padding: 3px;
    border-radius: 50%;
    right: -15px;
    top: -15px;
    z-index: 2;
    background: white;
    border: 1px solid black;
    font-size: 12px;
    margin: 3px 3px;
    font-weight: bold;
    color: #0e0100;
    text-align: center;
  }

  i {
    position: relative;
    color: black;
    font-size: 27px;
    z-index: 1;
  }
  @media screen and (max-width: 1100px) {
    margin-right: 100px;
  }
  @media screen and (max-width: 400px) {
    margin-right: 80px;
  }
`;
function Header() {
  return (
    <>
      <Nav>
        <div className="header-container">
          <div>
            <Link to="/main" className="logo">
              <h1>LOGOS</h1>
            </Link>
          </div>
          <Burger />
          <ProductConsumer>
            {(value) => {
              const { totalCount } = value;
              if (totalCount === 0) {
                return (
                  <Links>
                    <Link to="/main/cart">
                      <i className="fa fa-shopping-cart icon"></i>
                    </Link>
                  </Links>
                );
              } else {
                return (
                  <Links>
                    <div className="count">{totalCount}</div>
                    <Link to="/main/cart">
                      <i className="fa fa-shopping-cart icon"></i>
                    </Link>
                  </Links>
                );
              }
            }}
          </ProductConsumer>
        </div>
      </Nav>
    </>
  );
}

export default Header;
