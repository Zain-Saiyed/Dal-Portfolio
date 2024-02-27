import { ThemeOptions } from "@mui/material";
import { PALETTE_COLORS } from "./colors";

/**
 * MUI theme options for "Dark Mode"
 */
export const DARK_THEME: ThemeOptions = {
  palette: {
    mode: "dark",
    ...PALETTE_COLORS,
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        sx: {
          color: "#000",
          fontWeight: "700",
          backgroundColor: "#fcd405",
          "&:hover": {
            opacity: 0.9,
            backgroundColor: "#FFD801",
          }
        }
      },
    },
  },
};

export default DARK_THEME;