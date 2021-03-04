import React from "react";

import { PageBox, Content, GridView } from "components";
// import { Container } from './styles';

export interface Props {
  data: [];
  title: string;
}

const BoxNews: React.FC<Props> = ({ data, title }) => {
  return (
    <PageBox title={title}>
      <GridView>
        <Content />
        <Content />
        <Content />
        <Content />
      </GridView>
    </PageBox>
  );
};

export default BoxNews;
