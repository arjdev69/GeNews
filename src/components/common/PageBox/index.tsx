import React from "react";

import { Container } from "@material-ui/core";

import { useTheme } from "@material-ui/core/styles";

import { Box } from "./styles";

const PageBox: React.FC = ({ children }) => {
  const themeColor = useTheme();

  return (
    <Box>
      <Container
        style={{ background: themeColor.palette.primary.light }}
        maxWidth="lg"
        className="pageBox"
      >
        <>{children}</>
      </Container>
    </Box>
  );
};

export default PageBox;
