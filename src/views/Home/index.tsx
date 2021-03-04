import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getDataNewsList } from "store/modules/news/actions";

import { BoxNews } from "container";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { newsData } = useSelector((state: any) => state.News);

  useEffect(() => {
    dispatch(getDataNewsList("home"));
  }, [dispatch]);

  return (
    <>
      <BoxNews title={"Home"} data={newsData} />
    </>
  );
};

export default Home;
