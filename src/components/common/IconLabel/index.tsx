import React from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

export interface Props {
  button: Boolean | true;
  Icon: any;
  text: String;
}

const IconLabel: React.FC<Props> = ({ button, Icon, text, ...rest }) => {
  return (
    <ListItem button={button}>
      <ListItemIcon>{Icon && <Icon {...rest} />}</ListItemIcon>
      <ListItemText primary={text} color="primary" />
    </ListItem>
  );
};

export default IconLabel;
