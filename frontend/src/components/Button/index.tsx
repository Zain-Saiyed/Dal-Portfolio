import { Button as MuiButton, ButtonProps } from "@mui/material";
import { ElementType, FC, ReactNode, useMemo } from "react";

import Icon from "components/Icon";
import Link from "components/Link";
import { APP_BUTTON_VARIANT } from "components/config";

const MUI_BUTTON_COLORS = [
  "inherit",
  "primary",
  "secondary",
  "success",
  "error",
  "info",
  "warning",
];

const DEFAULT_SX_VALUES = {
  margin: 1,
};

export interface AppButtonProps
  extends Omit<ButtonProps, "color" | "endIcon" | "startIcon"> {
  color?: string;
  endIcon?: string | ReactNode;
  label?: string;
  text?: string;
  startIcon?: string | ReactNode;
  component?: ElementType;
  to?: string;
  href?: string;
  openInNewTab?: boolean;
  underline?: "none" | "hover" | "always";
}

const Button: FC<AppButtonProps> = ({
  children,
  color: propColor = "inherit",
  component: propComponent,
  endIcon,
  label,
  startIcon,
  sx: propSx = DEFAULT_SX_VALUES,
  text,
  underline = "none",
  variant = APP_BUTTON_VARIANT,
  ...restOfProps
}) => {
  const iconStart: ReactNode = useMemo(
    () =>
      !startIcon ? undefined : typeof startIcon === "string" ? (
        <Icon name={String(startIcon)} />
      ) : (
        startIcon
      ),
    [startIcon]
  );

  const iconEnd: ReactNode = useMemo(
    () =>
      !endIcon ? undefined : typeof endIcon === "string" ? (
        <Icon name={String(endIcon)} />
      ) : (
        endIcon
      ),
    [endIcon]
  );

  const isMuiColor = useMemo(
    () => MUI_BUTTON_COLORS.includes(propColor),
    [propColor]
  );

  const componentToRender =
    !propComponent && (restOfProps?.href || restOfProps?.to)
      ? Link
      : propComponent ?? MuiButton;

  const colorToRender = isMuiColor
    ? (propColor as ButtonProps["color"])
    : "inherit";
  const sxToRender = {
    ...propSx,
    ...(isMuiColor ? {} : { color: propColor }),
  };

  return (
    <MuiButton
      component={componentToRender}
      color={colorToRender}
      endIcon={iconEnd}
      startIcon={iconStart}
      sx={sxToRender}
      variant={variant}
      {...{ ...restOfProps, underline }}
    >
      {children || label || text}
    </MuiButton>
  );
};

export default Button;
