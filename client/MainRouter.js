import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./core/Home";
import Portfolio from "./portfolio/Portfolio";
import NavbarMenu from "./core/Navbar";

const MainRouter = () => {
  return (
    <div>
      <NavbarMenu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/edit" component={Portfolio} />
      </Switch>
    </div>
  );
};

export default MainRouter;
