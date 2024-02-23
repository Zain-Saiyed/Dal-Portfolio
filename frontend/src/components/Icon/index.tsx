import { ComponentType, FC, SVGAttributes } from "react";

import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import QuizIcon from "@mui/icons-material/Quiz";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import DayIcon from "@mui/icons-material/Brightness5";
import NightIcon from "@mui/icons-material/Brightness3";
import DefaultIcon from "@mui/icons-material/MoreHoriz";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import DayNightIcon from "@mui/icons-material/Brightness4";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import AccountCircle from "@mui/icons-material/AccountCircle";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";

import { APP_ICON_SIZE } from "components/config";

export const ICONS: Record<string, ComponentType> = {
  default: DefaultIcon,
  close: CloseIcon,
  menu: MenuIcon,
  settings: SettingsIcon,
  visibilityon: VisibilityIcon,
  visibilityoff: VisibilityOffIcon,
  daynight: DayNightIcon,
  night: NightIcon,
  day: DayIcon,
  search: SearchIcon,
  info: InfoIcon,
  home: HomeIcon,
  account: AccountCircle,
  signup: PersonAddIcon,
  login: PersonIcon,
  logout: ExitToAppIcon,
  notifications: NotificationsIcon,
  faq: QuizIcon,
  contactus: ContactPageIcon,
};

export interface AppIconProps extends SVGAttributes<SVGElement> {
  color?: string;
  name?: string;
  size?: string | number;
  title?: string;
}

const Icon: FC<AppIconProps> = ({
  color,
  name = "default",
  size = APP_ICON_SIZE,
  style,
  ...restOfProps
}) => {
  const iconName = (name || "default").trim().toLowerCase();

  let ComponentToRender = ICONS[iconName];
  if (!ComponentToRender) {
    console.warn(`AppIcon: icon "${iconName}" is not found!`);
    ComponentToRender = DefaultIcon;
  }

  const propsToRender = {
    height: size,
    color,
    fill: color && "currentColor",
    size,
    style: { ...style, color },
    width: size,
    ...restOfProps,
  };

  return <ComponentToRender data-icon={iconName} {...propsToRender} />;
};

export default Icon;
