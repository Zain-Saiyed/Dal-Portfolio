import { ThemeOptions } from "@mui/material";
import { PALETTE_COLORS } from "./colors";

/**
 * MUI theme options for "Dark Mode"
 */
export const DARK_THEME: ThemeOptions = {
  palette: {
    mode: "dark",
    // background: {
    //   paper: '#424242', // Gray 800 - Background of "Paper" based component
    //   default: '#121212',
    // },
    ...PALETTE_COLORS,
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        sx: {
          backgroundColor: "#fcd405",
          color: "#000",
          fontWeight: "700"
        }
      },
    },
  },
};

export default DARK_THEME;
