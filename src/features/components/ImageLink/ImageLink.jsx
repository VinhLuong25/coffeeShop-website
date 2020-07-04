import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../../assets/img/img-1.jpg";
import img2 from "../../../assets/img/img-2.jpg";
import img4 from "../../../assets/img/img-location.jpg";
import "./ImageLink.css";
function ImageLink(props) {
  return (
    <div>
      <div className="container">
        <Link to="/main/shop" className="container-item">
          <img src={img1} alt="" />
          <p>shop</p>
        </Link>
        <Link to="/main/story" className="container-item">
          <img src={img2} alt="" />
          <p>the story</p>
        </Link>

        <Link to="/main" className="container-item">
          <img src={img4} alt="" />
          <p>location</p>
        </Link>
      </div>
    </div>
  );
}

export default ImageLink;
