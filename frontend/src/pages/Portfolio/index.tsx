import {
  Box,
  CssBaseline,
  List,
  ListItem,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { useParams } from 'react-router-dom';
import useTextColor from "hooks/textColor";
import React, { useEffect } from "react";
import Bio from "./Sections/Bio";
import Education from "./Sections/Education";
import WorkExperience from "./Sections/WorkExperience";
import Projects from "./Sections/Projects";
import Skills from "./Sections/Skills";
import Certifications from "./Sections/Certifications";
import Resume from "./Sections/Resume";
import { GET } from "utils/axios";

import { CircularProgress, Alert } from '@mui/material';

import UserDefault from "assets/images/user_default.png";

type Props = {};

const PortfolioLinks = [
  {
    name: "About",
    id: "template-section-bio",
    component: Bio,
  },
  {
    name: "Education",
    id: "template-section-education",
    component: Education,
  },
  {
    name: "Work Experience",
    id: "template-section-work-experience",
    component: WorkExperience,
  },
  {
    name: "Projects",
    id: "template-section-projects",
    component: Projects,
  },
  {
    name: "Skills",
    id: "template-section-skills",
    component: Skills,
  },
  {
    name: "Certifications",
    id: "template-section-certifications",
    component: Certifications,
  },
  {
    name: "Resume",
    id: "template-section-resume",
    component: Resume,
  },
];

const Portfolio = (props: Props) => {
  const { user_name } = useParams();

  const [bgColor, setBgColor] = React.useState<string>("#fff");
  const [portfolio, setPortfolio] = React.useState<any>({});
  const [selectedLink, setSelectedLink] = React.useState<string>("About");
  const [ loading, set_loading ] = React.useState(true);
  const [ flag_failed, set_flag_failed ] = React.useState(false);

  useEffect(() => {
    fetchPortfolioList();
  }, []);

  const textColor = useTextColor(bgColor);

  const fetchPortfolioList = async () => {
    try {
      const res = await GET(`/api/profile/user/65f360189050f7fb6f800988/portfolios`);
      console.log(res.data);
      setPortfolio(res.data.portfolios?.[0]);
      setBgColor(res.data.portfolios?.[0]?.configuration?.color);
      set_loading(false);
    } catch (err) {
      set_flag_failed(true);
      console.log(err);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  };

  if (loading && !flag_failed) {
    return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Typography style={{marginRight: "2rem"}}>Loading Portfolio details...</Typography>
      <CircularProgress color="warning" size={60} />
    </Box>;
  }

  return (
    <Box>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            width: "17rem",
            height: "100%",
            padding: 2,
            background: bgColor,
            color: textColor,
          }}
        >
          <Stack
            height={"100%"}
            justifyContent={"space-between"}
            textAlign={"center"}
          >
            <Box
              sx={{
                height: "40%",
                alignContent: "flex-end",
                padding: 1,
                mx: "auto"
              }}
            >
              <img
                style={{
                  height: "10rem",
                  width: "10rem",
                  borderRadius: "50%",
                  border: ".5rem solid rgba(255,255,255,.2)",
                }}
                src={portfolio.photo_url ? portfolio.photo_url : UserDefault}
                alt="user"
              />
              {/* <Skeleton
                variant="rounded"
                animation={false}
                sx={{
                  height: "10rem",
                  width: "10rem",
                  borderRadius: "50%",
                  border: ".5rem solid rgba(255,255,255,.2)",
                }}
              /> */}
            </Box>
            <Box
              sx={{
                height: "60%",
                alignContent: "flex-start",
                padding: 1,
                mx: "auto",
              }}
            >
              <List>
                {PortfolioLinks?.map((ins: any) => (
                  <ListItem
                    sx={{ justifyContent: "center", cursor: "pointer" }}
                    onClick={() => {
                      setSelectedLink(ins?.name);
                      scrollToSection(ins?.id);
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: textColor === "black" ? "grey" : "#ffffff80",
                        textTransform: "uppercase",
                        "&:hover": {
                          color: textColor,
                        },
                        ...(ins?.name === selectedLink && {
                          color: textColor,
                        }),
                      }}
                    >
                      {ins?.name}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Stack>
        </Box>
        <Box
          sx={{
            width: "calc(100% - 17rem)",
            height: "100%",
            overflowY: "scroll",
          }}
        >
          {PortfolioLinks?.map(({ name, component: Component, id }: any) => (
            <Component id={id} portfolio={portfolio} />
            ))}


        </Box>
      </Box>
    </Box>
  );
};

export default Portfolio;
