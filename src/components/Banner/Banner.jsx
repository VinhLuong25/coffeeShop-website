import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
function Banner() {
  return (
    <div>
      <header className="case">
        <div className="case-content">
          <p>never run out of coffee</p>
          <Link to="/main/shop">
            <div className="btn">visit our shop</div>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Banner;
