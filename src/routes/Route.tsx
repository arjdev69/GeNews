import React from "react";

import { Route, Redirect } from "react-router-dom";

import { AuthLayout, DefaultLayout } from "views";

import { store } from "../store";

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = store.getState()._persist.rehydrated;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout route={rest}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
