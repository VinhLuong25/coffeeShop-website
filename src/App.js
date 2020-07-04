import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Coffee from "./features";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound";
import PopUp from "./features/pages/ShopPage/PopUp/PopUp";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="page-content">
          <Header />
          <div className="page-wrap">
            <Switch>
              <Redirect exact from="/" to="/main" />
              <Route path="/main" component={Coffee} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer />
          <PopUp />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
