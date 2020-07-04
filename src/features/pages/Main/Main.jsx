import React from "react";
import Banner from "../../../components/Banner/Banner";
import ImageLink from "../../components/ImageLink/ImageLink";
import Contact from "../../components/Contact/Contact";

export default function Main() {
  return (
    <div className="content">
      <Banner />
      <ImageLink />
      <div className="welcome">
        <div className="welcome-container">
          <h3>Welcome to specialty coffee and roasters</h3>
          <br />
          <p>
            ORIGO is a Melbourne based coffee roaster. We are committed to bring
            premium coffee beans around the world and pouring heart and sour
            into roasting the best coffee beans using innovative practices. We
            are taking you on an amazing coffee adventure! Our sole focus is on
            the process of carefully roasting the best coffee in the world using
            innovative and methodical roasting methods. We are committed to
            providing Australian cafes and consumers with the best selection of
            specially grown, amazing tastings and seasonal specialty coffees.
          </p>
        </div>
      </div>
      <Contact />
    </div>
  );
}
