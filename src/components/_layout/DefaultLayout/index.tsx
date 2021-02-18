import React from "react";

import { useSelector } from "react-redux";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import { Header } from "components";

import { Wrapper } from "./styles";
import { COLORS } from "styles/colors";

const DefaultLayout: React.FC = ({ children, route }) => {
  // test deploy
  const { isDarkMode } = useSelector((state: any) => state.Theme);

  const colorsTheme = createMuiTheme({
    palette: {
      type: isDarkMode ? "dark" : "light",
      primary: {
        dark: COLORS.primaryDark,
        light: COLORS.lightColor,
        main: isDarkMode ? COLORS.primary : COLORS.lightColor,
        contrastText: isDarkMode ? COLORS.lightColor : COLORS.primaryText,
      },
      secondary: {
        dark: COLORS.secondaryDark,
        light: COLORS.secondaryLight,
        main: isDarkMode ? COLORS.secondary : COLORS.lightColor,
        contrastText: isDarkMode ? COLORS.lightColor : COLORS.secondaryText,
      },
    },
  });

  return (
    <Wrapper
      style={{
        background: `linear-gradient(300deg, ${
          isDarkMode ? COLORS.secondary : COLORS.lightColor
        }, ${COLORS.secondaryLight})`,
      }}
    >
      <ThemeProvider theme={colorsTheme}>
        <Header route={route} />
        {children}
      </ThemeProvider>
    </Wrapper>
  );
};

export default DefaultLayout;
