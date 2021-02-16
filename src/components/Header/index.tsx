import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { setModeTheme } from "store/modules/modeTheme/actions";

import { Link } from "react-router-dom";
import { LABELS } from "utils/Constants";

import { IconLabel } from "components";

import { Container, Content } from "./styles";

import { Memory, Home, School, Bookmark } from "@material-ui/icons";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: any) => state.Theme);

  const setThemeMode = () => {
    dispatch(setModeTheme(!theme.isDarkMode));
  };

  return (
    <Container>
      <Content>
        <nav>
          <h4>{LABELS.appName}</h4>
          <div className="contentHeader">
            <span>
              <Link to="/">
                <IconLabel
                  button
                  Icon={Home}
                  text={LABELS.header.label.home}
                  color="secondary"
                  fontSize="small"
                />
              </Link>
            </span>
            <span>
              <Link to="/technology">
                <IconLabel
                  button
                  Icon={Memory}
                  text={LABELS.header.label.technology}
                  color="secondary"
                  fontSize="small"
                />
              </Link>
            </span>
            <span>
              <Link to="/science">
                <IconLabel
                  button
                  Icon={School}
                  text={LABELS.header.label.science}
                  color="secondary"
                  fontSize="small"
                />
              </Link>
            </span>
            <span>
              <Link to="/favorites">
                <IconLabel
                  button
                  Icon={Bookmark}
                  text={LABELS.header.label.favorites}
                  color="secondary"
                  fontSize="small"
                />
              </Link>
            </span>
          </div>
        </nav>

        <aside>
          <span
            onClick={() => {
              setThemeMode();
            }}
          >
            DarkMode
          </span>
        </aside>
      </Content>
    </Container>
  );
};

export default Header;
