import { CacheProvider, EmotionCache } from "@emotion/react";
import { FC, useMemo, PropsWithChildren } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import { useAppStore } from "store";
import DARK_THEME from "theme/dark";
import LIGHT_THEME from "theme/light";
import createEmotionCache from "theme/createEmotionCache";

function getThemeByDarkMode(darkMode: boolean) {
  return darkMode ? createTheme(DARK_THEME) : createTheme(LIGHT_THEME);
}

const CLIENT_SIDE_EMOTION_CACHE = createEmotionCache();

interface Props extends PropsWithChildren {
  emotionCache?: EmotionCache;
}

const AppThemeProvider: FC<Props> = ({
  children,
  emotionCache = CLIENT_SIDE_EMOTION_CACHE,
}) => {
  const [state] = useAppStore();

  const theme = useMemo(
    () => getThemeByDarkMode(state.darkMode),
    [state.darkMode]
  );

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default AppThemeProvider;
