export function getDataNewsList(category: any) {
  return {
    type: "@UPDATE_DATA/NEWS_DATA_LIST",
    payload: { category },
  };
}

export function setDataNewsList(newsData: any) {
  return {
    type: "@UPDATE_DATA/SET_NEWS_DATA_LIST",
    payload: { newsData },
  };
}
