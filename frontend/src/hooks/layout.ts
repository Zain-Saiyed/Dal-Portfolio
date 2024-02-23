import { useMediaQuery, useTheme } from "@mui/material";

export function useOnMobileByMediaQuery() {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down("sm"));
}

export const useOnMobile = useOnMobileByMediaQuery;
