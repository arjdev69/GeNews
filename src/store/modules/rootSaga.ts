import { all } from "redux-saga/effects";

import News from "./news/sagas";

export default function* rootSaga() {
  return yield all([News]);
}
