export function setModeTheme(isDarkMode: boolean) {
  return {
    type: "@UPDATE_DATA/SET_MODE_THEME",
    payload: { isDarkMode },
  };
}
