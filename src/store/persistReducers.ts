import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

// eslint-disable-next-line
export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: "genews",
      storage,
      whitelist: ["news"],
    },
    reducers
  );

  return persistedReducer;
};
