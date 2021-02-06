import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "services/api";

import { setDataNewsList } from "./actions";

export function* getDataNews({ payload }) {
  console.log(payload);
  try {
    const Response = yield call(api.get, `${payload.category}.json`, {
      params: {
        "api-key": "HbIHW4Mq94mvMAKFZpb4RrPqy748UAkP",
      },
    });

    const { data } = Response;

    yield put(setDataNewsList(data));
  } catch (err) {
    toast.error("Falha na autenticação, verifique seus dados");
  }
}

export default all([takeLatest("@UPDATE_DATA/NEWS_DATA_LIST", getDataNews)]);
