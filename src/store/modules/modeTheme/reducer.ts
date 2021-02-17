import produce from "immer";

const INITIAL_STATE = {
  isDarkMode: true,
};

export default function ModeTheme(
  state = INITIAL_STATE,
  action: { type: any; payload: { isDarkMode: boolean } }
) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@UPDATE_DATA/SET_MODE_THEME": {
        draft.isDarkMode = action.payload.isDarkMode;
        break;
      }
      default:
    }
  });
}
