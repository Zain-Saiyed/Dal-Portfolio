import { Box, Stack } from "@mui/material/";
import { Outlet, useNavigate } from "react-router-dom";
import { FC, PropsWithChildren, useCallback, useState } from "react";

import TopBar from "layout/TopBar";
import SideBar from "layout/SideBar";
import { LinkToPage } from "utils/type";
import { useOnMobile } from "hooks/layout";
import { useAppStore } from "store/AppStore";
import { useEventSwitchDarkMode } from "hooks/event";
import { Button, ErrorBoundary, IconButton } from "components";
import DalPortfolioDark from "assets/images/dal_portfolio_black_bg.png";
import DalPortfolioLight from "assets/images/dal_portfolio_white_bg.png";
import { TOP_BAR_DESKTOP_HEIGHT, TOP_BAR_MOBILE_HEIGHT } from "layout/config";

const SIDE_BAR_ITEMS: Array<LinkToPage> = [
  {
    title: "Home",
    path: "/",
    icon: "home",
  },
  {
    title: "Log In",
    path: "/auth/login",
    icon: "login",
  },
  {
    title: "Sign Up",
    path: "/auth/sign-up",
    icon: "signup",
  },
  {
    title: "FAQs",
    path: "/faq",
    icon: "faq",
  },
  {
    title: "Contact Us",
    path: "/contact-us",
    icon: "contactus",
  },
];

const NAVBAR_ITEMS: Array<LinkToPage> = SIDE_BAR_ITEMS.filter(
  (ins: any) => !["Home", "Log In", "Sign Up"].includes(ins?.title)
);

const BOTTOM_BAR_ITEMS: Array<LinkToPage> = [
  {
    title: "Log In",
    path: "/auth/login",
    icon: "login",
  },
  {
    title: "Sign Up",
    path: "/auth/sign-up",
    icon: "signup",
  },
  {
    title: "Contact Us",
    path: "/contact-us",
    icon: "contactus",
  },
];

const PublicLayout: FC<PropsWithChildren> = () => {
  const onMobile = useOnMobile();
  const navigate = useNavigate();
  const onSwitchDarkMode = useEventSwitchDarkMode();
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const [state] = useAppStore();

  const sidebarOpen = sideBarVisible;
  const sidebarVariant = "temporary";

  const onSideBarOpen = useCallback(() => {
    if (!sideBarVisible) setSideBarVisible(true);
  }, [sideBarVisible]);

  const onSideBarClose = useCallback(() => {
    if (sideBarVisible) setSideBarVisible(false);
  }, [sideBarVisible]);

  const startNode = () => {
    return (
      <Stack direction={"row"} alignItems={"center"}>
        {onMobile && <IconButton icon="menu" onClick={onSideBarOpen} />}
        <Box
          onClick={() => navigate("/")}
          sx={{
            cursor: "pointer",
            width: "200px",
          }}
        >
          <img
            src={!!state?.darkMode ? DalPortfolioDark : DalPortfolioLight}
            alt="Company Logo"
            style={{
              objectFit: "contain",
              maxWidth: "100%",
              maxHeight: "100%",
              verticalAlign: "middle",
            }}
          />
        </Box>
        {!onMobile &&
          NAVBAR_ITEMS?.map((item: any, index: number) => (
            <Button
              variant="text"
              onClick={() => navigate(item?.path)}
              key={`navbar-item-${index}`}
            >
              {item?.title}
            </Button>
          ))}
      </Stack>
    );
  };

  return (
    <Stack
      sx={{
        minHeight: "100vh",
        paddingTop: onMobile ? TOP_BAR_MOBILE_HEIGHT : TOP_BAR_DESKTOP_HEIGHT,
      }}
    >
      <Stack component="header">
        <TopBar
          startNode={startNode()}
          endNode={
            <IconButton
              icon={state.darkMode ? "day" : "night"}
              title={
                state.darkMode ? "Switch to Light mode" : "Switch to Dark mode"
              }
              onClick={onSwitchDarkMode}
            />
          }
        />

        {onMobile && (
          <SideBar
            anchor="left"
            open={sidebarOpen}
            variant={sidebarVariant}
            items={SIDE_BAR_ITEMS}
            onClose={onSideBarClose}
          />
        )}
      </Stack>

      <Stack
        component="main"
        sx={{
          flexGrow: 1,
          padding: 1,
        }}
      >
        <ErrorBoundary name="Content">{<Outlet />}</ErrorBoundary>
      </Stack>
    </Stack>
  );
};

export default PublicLayout;
