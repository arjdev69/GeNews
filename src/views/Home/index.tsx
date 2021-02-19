import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getDataNewsList } from "store/modules/news/actions";

import { PageBox } from "components";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const news = useSelector((state: any) => state.News);

  useEffect(() => {
    dispatch(getDataNewsList("home"));
  }, [dispatch]);

  console.log(news);

  return (
    <>
      <PageBox>HOME</PageBox>
    </>
  );
};

export default Home;
