import produce from "immer";

const INITIAL_STATE = {
  newsData: [],
  loading: false,
};

export default function News(
  state = INITIAL_STATE,
  action: { type: any; payload: { newsData: never[] } }
) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@UPDATE_DATA/NEWS_DATA_LIST": {
        draft.loading = true;
        break;
      }
      case "@UPDATE_DATA/SET_NEWS_DATA_LIST": {
        draft.newsData = action.payload.newsData;
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
