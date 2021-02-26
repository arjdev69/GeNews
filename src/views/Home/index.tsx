import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getDataNewsList } from "store/modules/news/actions";

import { PageBox, LazyImage } from "components";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const news = useSelector((state: any) => state.News);

  useEffect(() => {
    dispatch(getDataNewsList("home"));
  }, [dispatch]);

  console.log(news);

  return (
    <PageBox>
      <div style={{ height: 150, width: 150 }}>
        <LazyImage
          src={
            "https://images.unsplash.com/photo-1572652963245-bd7fda887078?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk5Mjc0fQ"
          }
          thumb={
            "https://images.unsplash.com/photo-1562886877-aaaa5c0b3225?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjk5Mjc0fQ"
          }
          height={50}
          width={60}
          alt={"baby in a diaper on a gray bed"}
          url={"#"}
          onIsVisible={() => console.log("DFFDGDHDFGFHFG")}
        />
      </div>
    </PageBox>
  );
};

export default Home;
