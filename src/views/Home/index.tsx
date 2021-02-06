import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getDataNewsList } from "store/modules/news/actions";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const news = useSelector((state: any) => state.News);

  useEffect(() => {
    dispatch(getDataNewsList("home"));

    console.log(news);
  }, []);

  return <div>HOME</div>;
};

export default Home;
