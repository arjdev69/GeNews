import React from "react";

import { BrowserRouter, Switch } from "react-router-dom";

import Route from "./Route";

import { Home, Technology, NotFound, Science, Favorites } from "views";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route isPrivate={false} path="/" exact component={Home} />
        <Route isPrivate path="/technology" component={Technology} />
        <Route isPrivate path="/science" component={Science} />
        <Route isPrivate path="/favorites" component={Favorites} />
        <Route isPrivate={false} component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
