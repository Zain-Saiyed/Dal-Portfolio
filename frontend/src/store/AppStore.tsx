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
  const [state, dispatch] = useReducer(AppReducer, {
    ...INITIAL_APP_STATE,
    darkMode: prefersDarkMode,
  });

  useEffect(() => {
    fetchSessionAPI();
  }, []);

  const fetchSessionAPI = async () => {
    const response = await GET("/api/user/session");
    if (response?.data) {
      dispatch({
        type: "LOG_IN",
        payload: {
          isAuthenticated: response?.data?.isAuthenticated,
          currentUser: response?.data?.user,
        },
      });
    }
  };

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};

const useAppStore = (): AppContextReturningType => useContext(AppContext);

export { AppStoreProvider as AppStore, AppContext, useAppStore };
