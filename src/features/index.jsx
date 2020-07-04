import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Main from "./pages/Main/Main";
import Shop from "./pages/ShopPage/Shop";
import Story from "./pages/StoryPage/Story";
import Login from "./pages/LoginPage/Login";
import Policy from "./pages/PolicyPage/Policy";
import NotFound from "../components/NotFound";
import Cart from "./pages/CartPage/Cart";
import Detail from "./pages/DetailPage/Detail";
function Coffee() {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.url} component={Main} />
      <Route path={`${match.url}/shop`} component={Shop} />
      <Route exact path={`${match.url}/story`} component={Story} />
      <Route exact path={`${match.url}/login`} component={Login} />
      <Route exact path={`${match.url}/policy`} component={Policy} />
      <Route exact path={`${match.url}/cart`} component={Cart} />
      <Route exact path={`${match.url}/details`} component={Detail} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Coffee;
