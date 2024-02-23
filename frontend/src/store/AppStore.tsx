import {
  FC,
  Dispatch,
  useReducer,
  useContext,
  createContext,
  PropsWithChildren,
} from "react";

import AppReducer from "store/AppReducer";
import { localStorageGet } from "utils/localStorage";
import useMediaQuery from "@mui/material/useMediaQuery";

export interface AppStoreState {
  darkMode: boolean;
  isAuthenticated: boolean;
  currentUser?: object | undefined;
}
const INITIAL_APP_STATE: AppStoreState = {
  darkMode: false,
  isAuthenticated: false,
};

type AppContextReturningType = [AppStoreState, Dispatch<any>];
const AppContext = createContext<AppContextReturningType>([
  INITIAL_APP_STATE,
  () => null,
]);

const AppStoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const previousDarkMode = Boolean(localStorageGet("darkMode"));
  // const tokenExists = Boolean(getToken());

  const initialState: AppStoreState = {
    ...INITIAL_APP_STATE,
    darkMode: previousDarkMode || prefersDarkMode,
    // isAuthenticated: tokenExists,
  };
  const value: AppContextReturningType = useReducer(AppReducer, initialState);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useAppStore = (): AppContextReturningType => useContext(AppContext);

export { AppStoreProvider as AppStore, AppContext, useAppStore };
