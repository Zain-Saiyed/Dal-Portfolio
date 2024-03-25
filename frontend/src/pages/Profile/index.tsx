import React, { useEffect, useLayoutEffect } from "react";
import { Box, Container, Tab, Tabs } from "@mui/material";

import Header from "pages/Profile/Header";
import Portfolio from "pages/Profile/Portfolio";
import Settings from "pages/Profile/Settings";
import { useOnMobile, useOnTablets } from "hooks";
import { GET } from "utils/axios";
import { isEmpty } from "utils/helpers";

type Props = {};

const Profile = (props: Props) => {
  const [activeTab, setActiveTab] = React.useState<Number>(0);
  const onMobile = useOnMobile();
  const onTablet = useOnTablets();

  const [user, setUser] = React.useState<any>({});

  useLayoutEffect(() => {
    isEmpty(user) && fetchUser();
  }, []);

  const fetchUser = async () => {
    GET(`/api/profile/user/65f360189050f7fb6f800988`).then((res) => {
      setUser(res.data.user);
    });
  };

  const profileTabs = [
    {
      label: "Portfolio",
      value: 0,
    },
    {
      label: "Settings",
      value: 1,
    },
  ];
  return (
    <Container
      sx={{
        width: "100%",
      }}
    >
      <Header user={user} refresh={fetchUser} />
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          ...(onMobile
            ? {
                flexDirection: "column",
              }
            : {
                flexGrow: 1,
              }),
        }}
      >
        <Tabs
          orientation={onMobile ? "horizontal" : "vertical"}
          variant="standard"
          value={activeTab}
          onChange={(e: any, value: Number) => setActiveTab(value)}
          aria-label="Profile Side Bar"
          sx={{
            ...(!onMobile && {
              borderRight: 1,
              borderColor: "divider",
            }),
            width: onMobile ? "100%" : onTablet ? "150px" : "250px",
          }}
        >
          {profileTabs.map((tab, index) => (
            <Tab key={index} label={tab.label} value={tab.value} />
          ))}
        </Tabs>
        <Box sx={{ marginTop: onMobile ? 1 : 0 }}>
          {activeTab === 0 && <Portfolio />}
          {activeTab === 1 && <Settings />}
        </Box>
      </Box>
    </Container>
  );
};

export default Profile;
