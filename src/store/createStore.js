/* eslint-disable import/no-anonymous-default-export */
import { createStore, compose, applyMiddleware } from "redux";

export default (reducers, middlewares: any) => {
  const enhancer =
    process.env.NODE_ENV === "development"
      ? compose(console.tron.createEnhancer(), applyMiddleware(...middlewares))
      : applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
