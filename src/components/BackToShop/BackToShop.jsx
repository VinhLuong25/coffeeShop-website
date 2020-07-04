import React from "react";
import { Link } from "react-router-dom";
export default function BackToShop() {
  return (
    <div>
      <Link to="/main/shop">
        <button className="backToShop">
          <i className="fa fa-caret-left"></i> back to shop
        </button>
      </Link>
    </div>
  );
}
