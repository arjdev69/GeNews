import { createStore, compose, applyMiddleware, Action, Reducer } from "redux";

export default (reducers: Reducer<unknown, Action<any>>, middlewares: any) => {
  const enhancer =
    process.env.NODE_ENV === "development"
      ? compose(console.tron.createEnhancer(), applyMiddleware(...middlewares))
      : applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
