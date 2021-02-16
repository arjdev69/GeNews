import React, { useEffect, useState } from "react";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green, orange, purple } from "@material-ui/core/colors";

import { Header } from "components";

import { Wrapper } from "./styles";

const lightTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

const darkTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#000",
      main: "#000",
      dark: "#000",
      contrastText: "#f000",
    },
    secondary: {
      light: "#000",
      main: "#000",
      dark: "#000",
      contrastText: "#000",
    },
  },
});

const DefaultLayout: React.FC = ({ children }) => {
  let mode = "dark";
  const [theme, setTheme] = useState(mode === "light" ? lightTheme : darkTheme);

  useEffect(() => {
    mode = "light";
    setTimeout(() => {
      setTheme(mode === "light" ? lightTheme : darkTheme);
    }, 1000);
  }, []);

  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <Header />
        {children}
      </ThemeProvider>
    </Wrapper>
  );
};

export default DefaultLayout;
