import React from "react";

import { BrowserRouter, Switch } from "react-router-dom";

import Route from "./Route";

import { Home, News } from "views";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route isPrivate={false} path="/" exact component={Home} />
        <Route isPrivate path="/News" component={News} />
        <Route isPrivate={false} component={News} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
