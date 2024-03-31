import {
  FC,
  Dispatch,
  useReducer,
  useContext,
  createContext,
  PropsWithChildren,
  useEffect,
} from "react";

import AppReducer from "store/AppReducer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { GET } from "utils/axios";
import { fetchSession } from "utils/session";

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
  let initialState: AppStoreState = {
    ...INITIAL_APP_STATE,
    darkMode: prefersDarkMode,
  };

  useEffect(() => {
    fetchSessionAPI();
  }, [])

  const fetchSessionAPI = async () => {
    GET("/api/user/session")?.then((response) => {
      initialState = {
        ...INITIAL_APP_STATE,
        darkMode: prefersDarkMode,
        isAuthenticated: response?.data?.isAuthenticated,
        currentUser: response?.data?.user,
      };
    })
  }
  const value: AppContextReturningType = useReducer(AppReducer, initialState);


  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useAppStore = (): AppContextReturningType => useContext(AppContext);

export { AppStoreProvider as AppStore, AppContext, useAppStore };
