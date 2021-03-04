import React from "react";

import { Container, Typography } from "@material-ui/core";

import { useTheme } from "@material-ui/core/styles";

import { Box } from "./styles";

export interface Props {
  title: string;
}

const PageBox: React.FC<Props> = ({ children, title }) => {
  const themeColor = useTheme();

  return (
    <Box>
      <Container
        style={{ background: themeColor.palette.primary.light }}
        maxWidth="lg"
        className="pageBox"
      >
        <Typography>{title}</Typography>
        <>{children}</>
      </Container>
    </Box>
  );
};

export default PageBox;
