import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home, News } from "views";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/News" component={News} />
        <Route component={News} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
