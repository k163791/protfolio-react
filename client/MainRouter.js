import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./core/Home";
import Portfolio from "./portfolio/Portfolio";

const MainRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
      </Switch>
    </div>
  );
};

export default MainRouter;
