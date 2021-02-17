import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { setModeTheme } from "store/modules/modeTheme/actions";

import { Link } from "react-router-dom";
import { LABELS } from "utils/Constants";

import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useTheme } from "@material-ui/core/styles";
import {
  Memory,
  Home,
  School,
  Bookmark,
  BrightnessMediumTwoTone,
} from "@material-ui/icons";

import { IconLabel } from "components";

import { Container, Content } from "./styles";

const Header: React.FC = ({ route }) => {
  const dispatch = useDispatch();
  const themeColor = useTheme();
  const theme = useSelector((state: any) => state.Theme);

  const setThemeMode = () => {
    dispatch(setModeTheme(!theme.isDarkMode));
  };

  return (
    <Container style={{ background: themeColor.palette.primary.main }}>
      <Content color={themeColor.palette.primary.contrastText}>
        <nav>
          <Typography
            style={{ color: themeColor.palette.primary.contrastText }}
          >
            {LABELS.appName}
          </Typography>
          <div className="contentHeader">
            <span>
              <Link to="/">
                <IconLabel
                  button
                  Icon={Home}
                  text={LABELS.header.label.home}
                  style={{
                    color: themeColor.palette.primary.contrastText,
                    fontSize: route.path === "/" ? 30 : 16,
                    transition: "font-size .20s ease",
                  }}
                />
              </Link>
            </span>
            <span>
              <Link to="/technology">
                <IconLabel
                  button
                  Icon={Memory}
                  text={LABELS.header.label.technology}
                  style={{
                    color: themeColor.palette.primary.contrastText,
                    fontSize: route.path === "/technology" ? 30 : 16,
                    transition: "font-size .20s ease",
                  }}
                />
              </Link>
            </span>
            <span>
              <Link to="/science">
                <IconLabel
                  button
                  Icon={School}
                  text={LABELS.header.label.science}
                  style={{
                    color: themeColor.palette.primary.contrastText,
                    fontSize: route.path === "/science" ? 30 : 16,
                    transition: "font-size .20s ease",
                  }}
                />
              </Link>
            </span>
            <span>
              <Link to="/favorites">
                <IconLabel
                  button
                  Icon={Bookmark}
                  text={LABELS.header.label.favorites}
                  style={{
                    color: themeColor.palette.primary.contrastText,
                    fontSize: route.path === "/favorites" ? 30 : 16,
                    transition: "font-size .20s ease",
                  }}
                />
              </Link>
            </span>
          </div>
        </nav>

        <aside>
          <Button
            color="primary"
            style={{ color: themeColor.palette.primary.contrastText }}
            onClick={() => {
              setThemeMode();
            }}
          >
            <BrightnessMediumTwoTone size="small" />
          </Button>
        </aside>
      </Content>
    </Container>
  );
};

export default Header;
