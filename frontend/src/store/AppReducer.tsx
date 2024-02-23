import { AppStoreState } from "store/AppStore";
import { localStorageSet } from "utils/localStorage";

const AppReducer: React.Reducer<AppStoreState, any> = (state, action) => {
  switch (action.type || action.action) {
    case "CURRENT_USER":
      return {
        ...state,
        currentUser: action?.currentUser || action?.payload,
      };
    case "SIGN_UP":
    case "LOG_IN":
      return {
        ...state,
        isAuthenticated: true,
      };
    case "LOG_OUT":
      return {
        ...state,
        isAuthenticated: false,
        currentUser: undefined,
      };
    case "DARK_MODE": {
      const darkMode = action?.darkMode ?? action?.payload;
      localStorageSet("darkMode", darkMode);
      return {
        ...state,
        darkMode,
      };
    }
    default:
      return state;
  }
};

export default AppReducer;
