import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-contact">
          <div className="social">
            <p>get social</p>
            <div className="social-icon">
              <a
                href="https://www.youtube.com/watch?v=mTBNXXBrFDg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook-f"></i>
              </a>
              <a
                href="https://www.youtube.com/watch?v=mTBNXXBrFDg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a
                href="https://www.youtube.com/watch?v=mTBNXXBrFDg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="cafes">
            <p>Cafes</p>
            <a href="https://www.youtube.com/watch?v=mTBNXXBrFDg">
              240 2nd Avenue South Seattle, WA 98104
            </a>
            <Link to="/main/policy">Our Policies</Link>
            <Link to="/main/contact">Contact us</Link>
          </div>
        </div>

        <hr />
        <div className="copyright">
          <p>COPYRIGHT &copy; 2020 COFFEE.</p>
          <p>ALL RIGHTS RESERVED COFFEE SHOP.</p>
        </div>
      </footer>
    </div>
  );
}
