import React from "react";

import { Link } from "react-router-dom";
import { LABELS } from "utils/Constants";

import { IconLabel } from "components";

import { Container, Content } from "./styles";

import { Memory, Home, School, Bookmark } from "@material-ui/icons";

const Header: React.FC = () => {
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

        <aside>DARK</aside>
      </Content>
    </Container>
  );
};

export default Header;
