import React from "react";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import { Header } from "components";

import { Wrapper } from "./styles";
import { useSelector } from "react-redux";

const DefaultLayout: React.FC = ({ children }) => {
  const { isDarkMode } = useSelector((state: any) => state.Theme);

  const colorsTheme = createMuiTheme({
    palette: {
      type: isDarkMode ? "dark" : "light",
      primary: {
        light: isDarkMode ? "#000" : "#757ce8",
        main: isDarkMode ? "#000" : "#757ce8",
        dark: isDarkMode ? "#000" : "#757ce8",
        contrastText: isDarkMode ? "#000" : "#757ce8",
      },
      secondary: {
        light: isDarkMode ? "#000" : "#757ce8",
        main: isDarkMode ? "#000" : "#757ce8",
        dark: isDarkMode ? "#000" : "#757ce8",
        contrastText: isDarkMode ? "#000" : "#757ce8",
      },
    },
  });

  return (
    <Wrapper>
      <ThemeProvider theme={colorsTheme}>
        <Header />
        {children}
      </ThemeProvider>
    </Wrapper>
  );
};

export default DefaultLayout;
