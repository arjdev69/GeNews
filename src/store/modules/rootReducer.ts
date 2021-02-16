import { combineReducers } from "redux";

import News from "./news/reducer";
import Theme from "./modeTheme/reducer";

export default combineReducers({
  News,
  Theme,
});
