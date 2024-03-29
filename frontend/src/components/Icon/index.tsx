import { ComponentType, FC } from "react";
import { SvgIconProps } from "@mui/material";

import XIcon from "@mui/icons-material/X";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import QuizIcon from "@mui/icons-material/Quiz";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import DayIcon from "@mui/icons-material/Brightness5";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import NightIcon from "@mui/icons-material/Brightness3";
import DefaultIcon from "@mui/icons-material/MoreHoriz";
import SettingsIcon from "@mui/icons-material/Settings";
import FacebookIcon from "@mui/icons-material/Facebook";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import DayNightIcon from "@mui/icons-material/Brightness4";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import AccountCircle from "@mui/icons-material/AccountCircle";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

import ContactMailIcon from '@mui/icons-material/ContactMail';
import SchoolIcon from '@mui/icons-material/School';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import BoltIcon from '@mui/icons-material/Bolt';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

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
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
  youtube: YouTubeIcon,
  twitter: XIcon,
  edit: EditIcon,
  delete: DeleteIcon,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  bio: ContactMailIcon,
  education: SchoolIcon,
  work: WorkOutlineIcon,
  project: TrackChangesIcon,
  certification: MilitaryTechIcon,
  skill: BoltIcon,
  error: ErrorOutlineIcon
};

const Icon: FC<SvgIconProps> = ({
  color,
  name = "default",
  fontSize = APP_ICON_SIZE,
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
    height: fontSize,
    color,
    fill: color && "currentColor",
    size: fontSize,
    style: { ...style, color },
    width: fontSize,
    ...restOfProps,
  };

  return <ComponentToRender data-icon={iconName} {...propsToRender} />;
};

export default Icon;
